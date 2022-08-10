// Adding this here for reference, but it will only work when kept in root of edc project

const fs = require('fs');
const path = require('path');

// All extJS files
const allFiles = [];

const fileSizeUnits = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

// A pretty way to get the formatted file size
const getFormattedSize = fileSizeInBytes => {
  let l = 0,
      n = parseInt(fileSizeInBytes, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + fileSizeUnits[l];
};

const getFileSize = filePath => {
  const fileStats = fs.statSync(filePath);
  const fileSizeInBytes = fileStats.size;

  return getFormattedSize(fileSizeInBytes);
};

const getExtendedComponents = fileText => {
  const childComponents = [];

  const matches = fileText.matchAll(/Ext\.extend\((.+),/g);

  for (const match of matches) {
    const childComponentName = match[0].split('(')[1].slice(0, -1);

    childComponents.push({
      name: childComponentName,
    });
  }

  return childComponents;
};

// Utility for getting the child components and ext component have
const getComponentDetailsFromPatterns = (pattern, fileText) => {
  const childComponents = [];
  // @ts-ignore
  const components = fileText.matchAll(pattern);

  for (const match of components) {
    const absoluteName = match[0].slice(0, -1);
    const childComponentPath = absoluteName
        .split('new')[1]
        .trim()
        .split('(')[0];

    childComponents.push({
      name: childComponentPath,
      path: childComponentPath,
    });
  }

  const uniqueComponents = childComponents.filter(
      (v, i, a) => a.findIndex(v2 => v2.name === v.name) === i
  );

  return uniqueComponents;
};

// Parser for getting data of different type of child components an ext component can have
const getChildComponents = fileText => {
  // Ext components created by us and used in other file
  const importedExtComponents = getComponentDetailsFromPatterns(
      /new ux.+([(^\.]+)/g,
      fileText
  );

  // React components created by us and used in ext file by bridging
  const importedReactComponents = getComponentDetailsFromPatterns(
      /new Castor.+([(^\.]+)/g,
      fileText
  );

  const defaultExtComponents = getComponentDetailsFromPatterns(
      /new Ext.+([(^\.]+)/g,
      fileText
  );

  return {
    importedExtComponents,
    importedReactComponents,
    defaultExtComponents,
  };
};

// Parser to get all files in folders and sub folders of the ext js project root directory
const getNestedFilePath = directory => {
  const filesInDirectory = fs.readdirSync(directory);

  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);

    if (fs.statSync(absolute).isDirectory()) {
      getNestedFilePath(absolute);
    } else {
      allFiles.push(absolute);
    }
  }
};

const getComponentNodes = () => {
  // We fetch list of ext components files by giving the root of the ext project
  getNestedFilePath('server/sys/castor');

  const nodes = [];

  allFiles.forEach(path => {
    const fileText = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });

    if (fileText?.includes('Ext.reg(')) {
      const splittedFilePath = path.split('/');
      const name = splittedFilePath[splittedFilePath.length - 1];

      const extendsComponents = getExtendedComponents(fileText);
      const childrenComponents = getChildComponents(fileText);

      extendsComponents.forEach(x => {
        if (!nodes.find(_ => _.name === x.name)) {
          nodes.push(x);
        }
      });
      childrenComponents.defaultExtComponents.forEach(x => {
        if (!nodes.find(_ => _.name === x.name)) {
          nodes.push(x);
        }
      });
      childrenComponents.importedExtComponents.forEach(x => {
        if (!nodes.find(_ => _.name === x.name)) {
          nodes.push(x);
        }
      });
      childrenComponents.importedReactComponents.forEach(x => {
        if (!nodes.find(_ => _.name === x.name)) {
          nodes.push(x);
        }
      });

      nodes.push({
        path,
        name: name.replace(/\.js$/, ''),
        fileName: name,
        size: getFileSize(path),
        extendsExtComponents: extendsComponents.map(_ => _.name),
        usesExtComponents: childrenComponents.defaultExtComponents.map(
            _ => _.name
        ),
        childComponents: [
          ...childrenComponents.importedExtComponents.map(_ => _.name),
          ...childrenComponents.importedReactComponents.map(_ => _.name),
        ],
      });
    }
  });

  return nodes;
};

const nodes = getComponentNodes();

// Create a json file with the config
fs.writeFile('mapConfig.json', JSON.stringify(nodes), err => {
  // Checking for errors
  if (err) throw err;

  console.log('Done writing'); // Success
});
