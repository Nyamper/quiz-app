import { TableCell, TableRow, Typography } from '@mui/material';
import { LeaderBoard } from '../../../../types/types';
import moment from 'moment';

type Props = {
  _id?: string;
  username: string;
  category: string;
  quizName: string;
  time: number;
  createdAt?: Date;
  updatedAt?: Date;
};

const LeaderTable = ({
  username,
  category,
  quizName,
  time,
  createdAt,
}: Props) => {
  const achievementDate = moment(createdAt).format('DD MMMM YYYY');
  const convertedTime = moment.utc(time * 1000).format('HH:mm:ss');
  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell>
          <Typography variant="h6">{username}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6">{category}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6">{quizName}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6">{convertedTime}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6">{achievementDate}</Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

export default LeaderTable;
