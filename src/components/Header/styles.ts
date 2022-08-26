import { styled, experimental_sx as sx } from '@mui/system';

import LogoutIcon from '@mui/icons-material/Logout';

import { NavLink } from 'react-router-dom';
import { AppBar, MenuItem } from '@mui/material';

export const StyledNavLink = styled(NavLink)`
  color: #ffff99;
  text-decoration: none;
  margin: 0 15px 0 15px;

  &.active {
    color: #ffff00;
    text-shadow: 0 0 7px #ffff33, 0 0 10px #ffff33, 0 0 21px #ffff33,
      0 0 42px #ffff66, 0 0 82px #ffff66, 0 0 92px #ffff66, 0 0 102px #ffff99,
      0 0 151px #ffff99;
  }
  :hover:not(.active) {
    color: #ffff00;
    text-shadow: 0 0 7px #ffff33, 0 0 10px #ffff33;
  }
`;

export const StyledAppBar = styled(AppBar)`
  position: 'sticky';
  margin-bottom: 2rem;
`;

export const StyledMenuItem = styled(MenuItem)(
  sx({
    '&:hover': {
      backgroundColor: 'none',
      background: 'none',
      scale: '1.04',
    },
  })
);

export const StyledLogoutIcon = styled(LogoutIcon)(
  sx({
    backgroundColor: 'inherit',
    color: '#ff3300',
    '&:hover': {
      scale: '1.04',
      backgroundColor: 'transparent',
      boxShadow:
        '0 0 7px #ff704d, 0 0 10px #ff704d, 0 0 21px #ff5c33, 0 0 42px #ff5c33, 0 0 82px #ff471a, 0 0 92px #ff471a, 0 0 102px #ff3300, 0 0 151px #ff3300',
    },
  })
);
