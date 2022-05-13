import { Banner, ViewHeader } from '@castoredc/matter';

import edcClocData from '../data/edc-cloc.json';
import ClocDataGrid from '../components/ClocDataGrid';

const records = Object.entries(edcClocData)
  .filter(([key]) => key !== 'header')
  .map(([key, value]: [string, any]) => ({
    language: key !== 'SUM' ? key : '∑ TOTAL',
    files: value.nFiles,
    filesFormatted: value.nFiles.toLocaleString(),
    blank: value.blank,
    blankFormatted: value.blank.toLocaleString(),
    comment: value.comment,
    commentFormatted: value.comment.toLocaleString(),
    code: value.code,
    codeFormatted: value.code.toLocaleString(),
  }));

const ClocScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ViewHeader>Count Lines of Code (cloc) on EDC Repository</ViewHeader>
      <Banner
        description={
          <>
            Data was collected by running{' '}
            <em style={{ fontWeight: 'bold' }}>cloc --json</em> command on a
            directory with fresh clone of{' '}
            <a href="https://github.com/castoredc/edc">EDC</a> repository at
            commit 6fb6e43fe96502e31fe04f1e182b475566b2d6d6.
            <ul style={{ margin: 0, padding: '10px 0 0 0', listStyle: 'none' }}>
              <li>Date: 2022-05-12 13:50</li>
              <li>System: Ubuntu 20.04</li>
              <li>cloc: 1.82</li>
            </ul>
          </>
        }
      />
      <ClocDataGrid records={records} />
    </div>
  );
};

export default ClocScreen;
