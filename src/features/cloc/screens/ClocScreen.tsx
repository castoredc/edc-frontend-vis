import { Banner, ViewHeader } from '@castoredc/matter';

import edcClocData from '../data/edc-cloc.json';
import ClocDataGrid from '../components/ClocDataGrid';

const records = Object.entries(edcClocData)
  .map(([key, value]) => ({
    language: key !== 'SUM' ? key : 'TOTAL',
    //@ts-ignore
    files: value.nFiles,
    //@ts-ignore
    blank: value.blank,
    //@ts-ignore
    comment: value.comment,
    //@ts-ignore
    code: value.code,
  }))
  .filter((r) => r.language !== 'header');

const ClocScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ViewHeader>
        Count Lines of Code (cloc) Results for EDC Repository
      </ViewHeader>
      <Banner
        description={
          <>
            Data was collected by running{' '}
            <em style={{ fontWeight: 'bold' }}>cloc edc/ --json</em> command on
            a directory with fresh clone of{' '}
            <a href="https://github.com/castoredc/edc">EDC</a> repository with
            head at commit 6fb6e43fe96502e31fe04f1e182b475566b2d6d6.
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
