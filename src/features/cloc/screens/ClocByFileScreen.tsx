import { useState } from 'react';
import {
  Banner,
  Button,
  FormLabel,
  TextInput,
  ViewHeader,
} from '@castoredc/matter';

import edcClocByFileData from '../data/edc-cloc-by-file.json';
import ClockByFileDataGrid from '../components/ClockByFileDataGrid';

const allRecords = Object.entries(edcClocByFileData)
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

const LIMIT = 100;

const ClocByFileScreen = () => {
  const [records, setRecords] = useState(allRecords.slice(0, LIMIT));
  const [nameFilter, setFileNameFilter] = useState('');

  const filterRecords = () => {
    const matching = allRecords
      .filter((r) => nameFilter === '' || r.name.includes(nameFilter))
      .slice(0, LIMIT);

    setRecords(matching);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <ViewHeader>
        Count Lines of Code (cloc) by File on EDC Repository
      </ViewHeader>
      <Banner
        description={
          <>
            Data was collected by running{' '}
            <em style={{ fontWeight: 'bold' }}>cloc --by-file --json</em>{' '}
            command on a directory with fresh clone of{' '}
            <a href="https://github.com/castoredc/edc">EDC</a> repository at
            commit 6fb6e43fe96502e31fe04f1e182b475566b2d6d6.
            <ul style={{ margin: 0, padding: '10px 0 0 0', listStyle: 'none' }}>
              <li>Date: 2022-05-12 16:15</li>
              <li>System: Ubuntu 20.04</li>
              <li>cloc: 1.82</li>
            </ul>
            <br />
            Note: currently only top 100 matching files are displayed. Total
            count: {allRecords.length} (TODO: pagination)
          </>
        }
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <FormLabel id="nameFilter" hideLabel>
          Name
        </FormLabel>
        <TextInput
          id="nameFilter"
          value={nameFilter}
          onChange={(event) => setFileNameFilter(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              filterRecords();
            }
          }}
        />
        <Button onClick={filterRecords}>Filter</Button>
      </div>
      <ClockByFileDataGrid records={records} />
    </div>
  );
};

export default ClocByFileScreen;
