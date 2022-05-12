import { Banner, ViewHeader } from '@castoredc/matter';

import edcClocByFileData from '../data/edc-cloc-by-file.json';
import ClockByFileDataGrid from '../components/ClockByFileDataGrid';

const records = Object.entries(edcClocByFileData)
  .map(([key, value]) => ({
    name: key !== 'SUM' ? key : 'TOTAL',
    //@ts-ignore
    language: value.language,
    //@ts-ignore
    blank: value.blank,
    //@ts-ignore
    comment: value.comment,
    //@ts-ignore
    code: value.code,
  }))
  .filter((r) => r.name !== 'header');

const ClocByFileScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ViewHeader>
        Count Lines of Code (cloc) Results for EDC Repository
      </ViewHeader>
      <Banner
        description={
          <>
            Data was collected by running{' '}
            <em style={{ fontWeight: 'bold' }}>cloc --by-file --json</em>{' '}
            command on a directory with fresh clone of{' '}
            <a href="https://github.com/castoredc/edc">EDC</a> repository with
            head at commit 6fb6e43fe96502e31fe04f1e182b475566b2d6d6.
            <ul style={{ margin: 0, padding: '10px 0 0 0', listStyle: 'none' }}>
              <li>Date: 2022-05-12 16:15</li>
              <li>System: Ubuntu 20.04</li>
              <li>cloc: 1.82</li>
            </ul>
            <br />
            Note: currently only top 100 files are displayed out of{' '}
            {records.length} (TODO: pagination)
          </>
        }
      />
      {/* TODO: Allow all records when pagination is done */}
      <ClockByFileDataGrid records={records.slice(0, 100)} />
    </div>
  );
};

export default ClocByFileScreen;
