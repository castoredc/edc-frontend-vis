import React, { useEffect } from 'react';
import { DataGrid } from '@castoredc/matter';

import ClocRecord from '../types/ClocRecord';

type Props = {
  records: ClocRecord[];
};

const ClocDataGrid: React.FC<Props> = (props) => {
  const [rows, setRows] = React.useState<any>([]);

  useEffect(() => {
    const rows = props.records.map((record) => ({
      __rowId: 'r_' + record.language,
      id: <DataGrid.HeaderCell>{record.language}</DataGrid.HeaderCell>,
      files: <DataGrid.CellText>{record.filesFormatted}</DataGrid.CellText>,
      blank: <DataGrid.CellText>{record.blankFormatted}</DataGrid.CellText>,
      comment: <DataGrid.CellText>{record.commentFormatted}</DataGrid.CellText>,
      code: <DataGrid.CellText>{record.codeFormatted}</DataGrid.CellText>,
      percent: <DataGrid.ProgressCell progress={record.percent} />,
    }));

    setRows(rows);
  }, [props.records]);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <DataGrid
        accessibleName="cloc results"
        columns={[
          {
            Header: 'Language',
            accessor: 'id',
            isRowHeader: true,
            width: 200,
          },
          {
            Header: 'Files',
            accessor: 'files',
            width: 150,
          },
          {
            Header: 'Blank',
            accessor: 'blank',
            width: 150,
          },
          {
            Header: 'Comment',
            accessor: 'comment',
            width: 150,
          },
          {
            Header: 'Code',
            accessor: 'code',
            width: 150,
          },
          {
            Header: 'Total Code %',
            accessor: 'percent',
            width: 200,
          },
        ]}
        onClick={(rowId) => console.log(rowId)}
        rows={rows}
      />
    </div>
  );
};

export default ClocDataGrid;
