import { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';

import { quizAuthLogin } from './thunk/auth';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { FormValues } from './types';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IconButton, InputAdornment } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { StyledContainer } from './styles';

const Auth = () => {
  const { loading, error } = useAppSelector((state) => state.auth);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = ({ username, password }: FormValues) => {
    dispatch(quizAuthLogin({ username, password }));
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledContainer>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            width="100%"
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange } }) => (
                <TextField
                  color={errors.username && 'error'}
                  onChange={onChange}
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentityIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Box height={20}>
              <Typography color="error">{errors.username?.message}</Typography>
            </Box>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange } }) => (
                <TextField
                  color={errors.password && 'error'}
                  onChange={onChange}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon color="secondary" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleShowPassword}
                          color="secondary"
                        >
                          {!showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <Box height={20}>
              <Typography color="error">{errors.password?.message}</Typography>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
        </StyledContainer>
      </Container>
    </>
  );
};

export default Auth;
