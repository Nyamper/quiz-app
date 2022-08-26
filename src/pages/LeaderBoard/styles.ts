import { styled, experimental_sx as sx } from '@mui/system';
import { TableCell, Table } from '@mui/material';

export const StyledTableCell = styled(TableCell)(
  sx({
    fontWeight: 'bold',
  })
);

export const StyledTable = styled(Table)(
  sx({
    minWidth: 650,
    border: 1,
    borderColor: 'secondary.main',
  })
);
