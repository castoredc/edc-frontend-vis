import { useState } from 'react';
import {
  Banner,
  Button,
  ChoiceOption,
  FormLabel,
  TextInput,
  ViewHeader,
} from '@castoredc/matter';

import edcClocByFileData from '../data/edc-cloc-by-file.json';
import ClocByFileRecord from '../types/ClocByFileRecord';
import ClocByFileDataGrid from '../components/ClocByFileDataGrid';

import classes from './ClocByFileScreen.module.css';

const allRecords = Object.entries(edcClocByFileData)
  .filter(([key]) => key !== 'header')
  .map(([key, value]: [string, any]) => ({
    path: key !== 'SUM' ? key : 'TOTAL',
    language: value.language,
    blank: value.blank,
    comment: value.comment,
    code: value.code,
  }));

const LIMIT = 100;

const ClocByFileScreen = () => {
  const [records, setRecords] = useState(allRecords.slice(0, LIMIT));
  const [pathFilter, setPathFilter] = useState('');
  const [caseSensitiveFilter, setCaseSensitiveFilter] = useState(false);
  const [regExpFilter, setRegExpFilter] = useState(false);
  const [matchingCount, setMatchingCount] = useState<number | undefined>();

  const filterRecords = () => {
    if (pathFilter !== '') {
      let matching: ClocByFileRecord[] = [];

      if (regExpFilter) {
        const regExp = new RegExp(
          pathFilter,
          caseSensitiveFilter ? undefined : 'i'
        );

        matching = allRecords.filter((r) => regExp.test(r.path));
      } else {
        const filterValue = caseSensitiveFilter
          ? pathFilter
          : pathFilter.toLocaleLowerCase();

        const getPath = (record: ClocByFileRecord) =>
          caseSensitiveFilter ? record.path : record.path.toLocaleLowerCase();

        matching = allRecords.filter((r) => getPath(r).includes(filterValue));
      }

      setMatchingCount(matching.length);
      setRecords(matching.slice(0, LIMIT));
    } else {
      setRecords(allRecords.slice(0, LIMIT));
      setMatchingCount(undefined);
    }
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
          </>
        }
      />
      <div className={classes.SettingsPanel}>
        <div
          className={classes.Filter}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              filterRecords();
            }
          }}
        >
          <FormLabel id="pathFilter" hideLabel>
            Path
          </FormLabel>
          <TextInput
            id="pathFilter"
            value={pathFilter}
            onChange={(event) => setPathFilter(event.target.value)}
          />
          <ChoiceOption
            labelText="Case sensitive"
            onChange={() => setCaseSensitiveFilter(!caseSensitiveFilter)}
            checked={caseSensitiveFilter}
          />
          <ChoiceOption
            labelText="RegExp"
            onChange={() => setRegExpFilter(!regExpFilter)}
            checked={regExpFilter}
          />
          <Button onClick={filterRecords}>Filter</Button>
        </div>
        <div className={classes.Counts}>
          <span>
            Matching: {matchingCount !== undefined ? matchingCount : 'N/A'}
          </span>
          <span>Showing: {records.length}</span>
          <span>Total: {allRecords.length}</span>
        </div>
      </div>
      <ClocByFileDataGrid records={records} />
    </div>
  );
};

export default ClocByFileScreen;
