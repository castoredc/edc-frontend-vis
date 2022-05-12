import React, { useEffect } from 'react';
import { DataGrid } from '@castoredc/matter';

import ClocByFileRecord from '../types/ClocByFileRecord';

type Props = {
  records: ClocByFileRecord[];
};

const ClocByFileDataGrid: React.FC<Props> = (props) => {
  const [rows, setRows] = React.useState<any>([]);

  useEffect(() => {
    const rows = props.records.map((record) => ({
      __rowId: 'r_' + record.name,
      id: <DataGrid.HeaderCell>{record.name}</DataGrid.HeaderCell>,
      language: <DataGrid.CellText>{record.language}</DataGrid.CellText>,
      blank: <DataGrid.CellText>{record.blank}</DataGrid.CellText>,
      comment: <DataGrid.CellText>{record.comment}</DataGrid.CellText>,
      code: <DataGrid.CellText>{record.code}</DataGrid.CellText>,
      menu: (
        <DataGrid.ActionsCell
          items={[
            {
              destination: () => console.log('Lorem clicked...'),
              label: 'Lorem Ipsum',
            },
          ]}
        />
      ),
    }));

    setRows(rows);
  }, [props.records]);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <DataGrid
        accessibleName="cloc results"
        anchorRightColumns={1}
        columns={[
          {
            Header: 'Name',
            accessor: 'id',
            isRowHeader: true,
            width: 700,
          },
          {
            Header: 'Language',
            accessor: 'language',
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
          DataGrid.ActionsCell.column,
        ]}
        onClick={(rowId) => console.log(rowId)}
        onColumnResizeEnd={(columnWidth) => console.log(columnWidth)}
        onRowSelection={(rowId, selected) => console.log({ rowId, selected })}
        rows={rows}
      />
    </div>
  );
};

export default ClocByFileDataGrid;
