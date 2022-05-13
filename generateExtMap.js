// Adding this here for reference, but it will only work when kept in root of edc project

const fs = require('fs');
const path = require('path');

// All extJS files
let allFiles = [];

const fileSizeUnits = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

// A pretty way to get the formatted file size
const getFormattedSize = (fileSizeInBytes) => {
  let l = 0,
    n = parseInt(fileSizeInBytes, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + fileSizeUnits[l];
};

const getFileSize = (filePath) => {
  const fileStats = fs.statSync(filePath);
  const fileSizeInBytes = fileStats.size;

  return getFormattedSize(fileSizeInBytes);
};

// Utility for getting the child components and ext component have
const getComponentDetailsFromPatterns = (pattern, fileText) => {
  const childComponents = [];
  // @ts-ignore
  const components = fileText.matchAll(pattern);

  for (const match of components) {
    const absoluteName = match[0].slice(0, -1);
    const childComponentPath = absoluteName.split('new')[1].trim();
    const splittedChildComponentPath = childComponentPath.split('.');
    const childComponentName =
      splittedChildComponentPath[splittedChildComponentPath.length - 1];

    childComponents.push({
      name: childComponentName,
      calledAs: absoluteName,
      path: childComponentPath,
    });
  }

  const uniqueComponents = childComponents.filter(
    (v, i, a) => a.findIndex((v2) => v2.name === v.name) === i
  );

  return uniqueComponents;
};

// Parser for getting data of different type of child components an ext component can have
const getChildComponentData = (fileText) => {
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
const getNestedFilePath = (directory) => {
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

const getFilesWithExtComponents = () => {
  // We fetch list of ext components files by giving the root of the ext project
  getNestedFilePath('server/sys/castor');

  let filteredFiles = [];

  allFiles.forEach((path, index) => {
    const fileText = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });

    if (fileText?.includes('Ext.reg(')) {
      const splittedFilePath = path.split('/');
      const name = splittedFilePath[splittedFilePath.length - 1];
      filteredFiles.push({
        path,
        name: name.replace(/\.js$/, ''),
        fileName: name,
        size: getFileSize(path),
        childComponents: getChildComponentData(fileText),
      });
    }
  });

  return filteredFiles;
};

const filesWithExtComponents = getFilesWithExtComponents();

// Create a json file with the config
fs.writeFile(
  'mapConfig.json',
  JSON.stringify({ config: filesWithExtComponents }),
  (err) => {
    // Checking for errors
    if (err) throw err;

    console.log('Done writing'); // Success
  }
);
