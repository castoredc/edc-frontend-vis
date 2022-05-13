import React, { useEffect } from 'react';
import { DataGrid } from '@castoredc/matter';

import ClocByFileRecord from '../types/ClocByFileRecord';

type Props = {
  records: ClocByFileRecord[];
  commitId: string;
};

const getFileUrl = (path: string, commitId?: string) => {
  // Example:
  // https://github.com/castoredc/edc/blob/master/src/js/hooks/useId.ts
  // https://github.com/castoredc/edc/blob/6fb6e43fe96502e31fe04f1e182b475566b2d6d6/src/js/hooks/useId.ts

  const staticPart =
    'https://github.com/castoredc/edc/blob/' + (commitId ?? 'master');
  const filePart = path.replace(/^edc/, '');
  return staticPart + filePart;
};

const ClocByFileDataGrid: React.FC<Props> = (props) => {
  const [rows, setRows] = React.useState<any>([]);

  useEffect(() => {
    const rows = props.records.map((record) => ({
      __rowId: 'r_' + record.path,
      id: <DataGrid.HeaderCell>{record.path}</DataGrid.HeaderCell>,
      language: <DataGrid.CellText>{record.language}</DataGrid.CellText>,
      blank: <DataGrid.CellText>{record.blank}</DataGrid.CellText>,
      comment: <DataGrid.CellText>{record.comment}</DataGrid.CellText>,
      code: <DataGrid.CellText>{record.code}</DataGrid.CellText>,
      linkCommit: (
        <DataGrid.IconCell
          button={{
            onClick: () =>
              window.open(getFileUrl(record.path, props.commitId), '_blank'),
          }}
          icon={{ description: 'Open in GitHub', type: 'link' }}
        />
      ),
      linkMaster: (
        <DataGrid.IconCell
          button={{
            onClick: () => window.open(getFileUrl(record.path), '_blank'),
          }}
          icon={{ description: 'Open in GitHub', type: 'link' }}
        />
      ),
    }));

    setRows(rows);
  }, [props.records, props.commitId]);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <DataGrid
        accessibleName="cloc by file results"
        anchorRightColumns={2}
        columns={[
          {
            Header: 'Path',
            accessor: 'id',
            isRowHeader: true,
            maxWidth: 1200,
            width: 700,
          },
          {
            Header: 'Language',
            accessor: 'language',
            width: 200,
          },
          {
            Header: 'Blank',
            accessor: 'blank',
            width: 120,
          },
          {
            Header: 'Comment',
            accessor: 'comment',
            width: 120,
          },
          {
            Header: 'Code',
            accessor: 'code',
            width: 120,
          },
          {
            Header: 'Commit',
            accessor: 'linkCommit',
            width: 70,
          },
          {
            Header: 'Master',
            accessor: 'linkMaster',
            width: 70,
          },
        ]}
        onClick={(rowId) => console.log(rowId)}
        rows={rows}
      />
    </div>
  );
};

export default React.memo(ClocByFileDataGrid);
