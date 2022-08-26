import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../Header';

import bricks from '../../assets/bricks.jpg';
import { GlobalStyles } from '../../styles/global';
import { Box } from '@mui/system';

import Auth from '../../pages/Auth';
import { quizAuthRemoveTokenAction } from '../../pages/Auth/reducer/auth';

import { useAppDispatch } from '../../hooks/hooks';

const Layout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(quizAuthRemoveTokenAction());
    window.location.reload();
  };

  return (
    <>
      <GlobalStyles />
      <Box
        style={{
          backgroundImage: `url(${bricks})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >
        {!localStorage.getItem('token') && <Auth />}
        {localStorage.getItem('token') && (
          <>
            <Header handleLogout={handleLogout} /> <Outlet />
          </>
        )}
        <ToastContainer
          toastStyle={{ backgroundColor: 'transparent', color: 'red' }}
          autoClose={3000}
          position="top-right"
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Box>
    </>
  );
};

export default Layout;
