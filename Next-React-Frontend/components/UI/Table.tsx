import tw from "tailwind-styled-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const TableContainer = tw.table`
    table-fixed
    w-full
`;

const TableHead = tw.thead`
    bg-gray-100
`;

const TableTr = tw.tr`
    border-b
`;

const TableTh = tw.th`
    py-2
`;

const TableTd = tw.td`
    py-2
`;

const Table: React.FC<{ columns: any }> = (props) => {
  return (
    <TableContainer>
      <TableHead>
        <TableTr>
          {props.columns.map((col: any, i: number) => {
            return (
              <TableTh key={i}>
                {col.label}&nbsp;&nbsp;
                {col.sorting && <FontAwesomeIcon icon={faSort} />}
              </TableTh>
            );
          })}
        </TableTr>
      </TableHead>
      <tbody>
        <TableTr>
          <TableTd>The Sliding Mr. Bones (Next Stop, Pottersville)</TableTd>
          <TableTd>Malcolm Lockyer</TableTd>
          <TableTd>1961</TableTd>
        </TableTr>
        <TableTr>
          <TableTd>Witchy Woman</TableTd>
          <TableTd>The Eagles</TableTd>
          <TableTd>1972</TableTd>
        </TableTr>
        <TableTr>
          <TableTd>Shining Star</TableTd>
          <TableTd>Earth, Wind, and Fire</TableTd>
          <TableTd>1975</TableTd>
        </TableTr>
      </tbody>
    </TableContainer>
  );
};

export default Table;
