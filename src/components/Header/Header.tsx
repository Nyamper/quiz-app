import {
  StyledNavLink,
  StyledLink,
  StyledAppBar,
  StyledYardIcon,
  StyledLogo,
} from './styles';
import { MenuItem, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <StyledAppBar
        position="sticky"
        sx={{ border: 1, borderColor: 'red' }}
        style={{
          backgroundColor: 'white',
          // backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <StyledYardIcon />
          <StyledLogo variant="h5">
            <StyledLink to={'/'}>QUIZ</StyledLink>
          </StyledLogo>

          <MenuItem>
            <Typography textAlign="center" variant="h6">
              <StyledNavLink to={'/quizzes'}>Quizzes</StyledNavLink>
            </Typography>
          </MenuItem>

          <MenuItem>
            <Typography textAlign="center" variant="h6">
              <StyledNavLink to={'/leaderboard'}>Leader board</StyledNavLink>
            </Typography>
          </MenuItem>

          <MenuItem>
            <Typography textAlign="center" variant="h6">
              <StyledNavLink to={'/builder'}>Quiz Builder</StyledNavLink>
            </Typography>
          </MenuItem>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
