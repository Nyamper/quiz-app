import { Box, Button, Typography } from '@mui/material';
import Modal from '../../../../components/Modal';

import { VerifiedAnswers } from '../../../../types/types';

type Props = {
  handleModalChangeName: (name: string) => void;
  verifiedAnswers: VerifiedAnswers[];
};

const StatisticScreenModal = ({
  handleModalChangeName,
  verifiedAnswers,
}: Props) => {
  return (
    <>
      <Modal>
        <Box
          sx={{
            p: 5,
            minWidth: 350,
            minHeight: 200,
            backgroundColor: '#f5f5f5',
          }}
        >
          <Box sx={{ p: 5, border: 1, borderColor: 'secondary.main' }}>
            <Box height="250px">
              <Typography variant="h4" align="center">
                Details
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                onClick={() => handleModalChangeName('FinalScreen')}
              >
                Go Back
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default StatisticScreenModal;
