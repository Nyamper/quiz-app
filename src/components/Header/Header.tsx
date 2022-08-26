import IconButton from '@mui/material/IconButton';
import { Toolbar, Tooltip, Typography } from '@mui/material';

import { StyledNavLink, StyledAppBar, StyledLogoutIcon } from './styles';

type Props = {
  handleLogout: () => void;
};

const Header = ({ handleLogout }: Props) => {
  return (
    <>
      <StyledAppBar
        position="sticky"
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <StyledNavLink to={'/'}>
            <Typography textAlign="center" variant="h6">
              HOME
            </Typography>
          </StyledNavLink>

          <StyledNavLink to={'/quizzes'}>
            <Typography textAlign="center" variant="h6">
              Quizzes
            </Typography>
          </StyledNavLink>

          <StyledNavLink to={'/builder'}>
            <Typography textAlign="center" variant="h6">
              Quiz Builder
            </Typography>
          </StyledNavLink>

          <StyledNavLink to={'/leaderboard'}>
            <Typography textAlign="center" variant="h6">
              Leader board
            </Typography>
          </StyledNavLink>

          <Tooltip
            title={
              <Typography variant="body1" style={{ color: '#FFFF99' }}>
                LogOut
              </Typography>
            }
          >
            <IconButton onClick={handleLogout}>
              <StyledLogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
