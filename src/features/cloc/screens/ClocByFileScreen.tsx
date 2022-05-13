import { useState } from 'react';
import {
  Banner,
  Button,
  ChoiceOption,
  Dropdown,
  FormLabel,
  ProgressBar,
  TextInput,
  ViewHeader,
} from '@castoredc/matter';

import edcClocByFileData from '../data/edc-cloc-by-file.json';
import ClocByFileRecord from '../types/ClocByFileRecord';
import ClocByFileDataGrid from '../components/ClocByFileDataGrid';

import classes from './ClocByFileScreen.module.css';

const LIMIT = 100;
const COMMIT_ID = '6fb6e43fe96502e31fe04f1e182b475566b2d6d6';

const allRecords = Object.entries(edcClocByFileData)
  .filter(([key]) => key !== 'header' && key !== 'SUM')
  .map(([key, value]: [string, any]) => ({
    path: key,
    language: value.language,
    blank: value.blank,
    blankFormatted: value.blank.toLocaleString(),
    comment: value.comment,
    commentFormatted: value.comment.toLocaleString(),
    code: value.code,
    codeFormatted: value.code.toLocaleString(),
  }));

const languageOptions = [...new Set(allRecords.map((r) => r.language))]
  .sort()
  .map((l) => ({
    label: l,
    value: l,
  }));

const totalLoc = allRecords.reduce((a, c) => (a += c.code), 0);

const ClocByFileScreen = () => {
  const [records, setRecords] = useState(allRecords.slice(0, LIMIT));
  const [pathFilter, setPathFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState<
    { label: string; value: string }[]
  >([]);
  const [caseSensitiveFilter, setCaseSensitiveFilter] = useState(false);
  const [regExpFilter, setRegExpFilter] = useState(false);
  const [matchingCount, setMatchingCount] = useState<number | undefined>();
  const [matchingLoc, setMatchingLoc] = useState<number | undefined>();

  const filterRecords = () => {
    if (pathFilter || languageFilter.length > 0) {
      let matching = [...allRecords];

      if (pathFilter) {
        if (regExpFilter) {
          const regExp = new RegExp(
            pathFilter,
            caseSensitiveFilter ? undefined : 'i'
          );

          matching = matching.filter((r) => regExp.test(r.path));
        } else {
          const filterValue = caseSensitiveFilter
            ? pathFilter
            : pathFilter.toLocaleLowerCase();

          const getPath = (record: ClocByFileRecord) =>
            caseSensitiveFilter ? record.path : record.path.toLocaleLowerCase();

          matching = matching.filter((r) => getPath(r).includes(filterValue));
        }
      }

      if (languageFilter.length > 0) {
        const languages = languageFilter.map((lf) => lf.value);
        matching = matching.filter((r) => languages.includes(r.language));
      }

      setMatchingCount(matching.length);
      setMatchingLoc(matching.reduce((a, c) => (a += c.code), 0));
      setRecords(matching.slice(0, LIMIT));
    } else {
      setRecords(allRecords.slice(0, LIMIT));
      setMatchingCount(undefined);
      setMatchingLoc(undefined);
    }
  };

  return (
    <div className={classes.Top}>
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
            commit {COMMIT_ID}.
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
          <div className={classes.Options}>
            <div className={classes.Path}>
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
            </div>
            <div className={classes.Languages}>
              <Dropdown
                isMulti
                menuWidth="700px"
                options={languageOptions}
                value={languageFilter}
                // @ts-ignore
                onChange={(value) => setLanguageFilter(value)}
              />
            </div>
          </div>
          <Button onClick={filterRecords}>Filter</Button>
        </div>
        <div className={classes.Stats}>
          <div>
            <div className={classes.Counts}>
              <span className={classes.StatsName}>FILES</span>
              <span>
                Matching:{' '}
                {matchingCount !== undefined
                  ? matchingCount.toLocaleString()
                  : 'N/A'}
              </span>
              <span>Showing: {records.length.toLocaleString()}</span>
              <span>Total: {allRecords.length.toLocaleString()}</span>
            </div>
            <ProgressBar
              progress={
                matchingCount !== undefined
                  ? (matchingCount * 100) / allRecords.length
                  : 0
              }
            />
          </div>
          <div>
            <div className={classes.Counts}>
              <span className={classes.StatsName}>LOC</span>
              <span>
                In matched:{' '}
                {matchingLoc !== undefined
                  ? matchingLoc.toLocaleString()
                  : 'N/A'}
              </span>
              <span>Total: {totalLoc.toLocaleString()}</span>
            </div>
            <ProgressBar
              progress={
                matchingLoc !== undefined ? (matchingLoc * 100) / totalLoc : 0
              }
            />
          </div>
        </div>
      </div>
      <ClocByFileDataGrid records={records} commitId={COMMIT_ID} />
    </div>
  );
};

export default ClocByFileScreen;
