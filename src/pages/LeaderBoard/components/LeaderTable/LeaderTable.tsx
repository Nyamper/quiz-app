import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { LeaderBoard } from '../../../../types/types';

const LeaderTable = (props: LeaderBoard[]) => {
  console.log(props);
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{/* here is the data */}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LeaderTable;
