import PropTypes from 'prop-types';

import { TableCell, TableRow, Typography } from '@mui/material';
import { LeaderBoard } from '../../../../types/types';
import moment from 'moment';

type Props = {
  username: string;
  category: string;
  quizName: string;
  time: number;
  createdAt?: Date;
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

LeaderTable.propTypes = {
  username: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quizName: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default LeaderTable;
