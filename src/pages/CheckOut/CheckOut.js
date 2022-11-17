import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

const CheckOut = ({
    modalOpen,
    handleModalClose,
    servicesDetails,
    setOrderSuccessful,
  }) => {
    const [user] = useAuthState(auth);
    const { name, price } = servicesDetails;

    const handlePlaceOrder = () => {};

    return (
        <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Box style={{ textAlign: "center" }} sx={style}>
            <Typography
              sx={{ fontWeight: "bold", marginBottom: 3 }}
              id="transition-modal-title"
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
            <form onSubmit={handlePlaceOrder}>
              <Typography
                sx={{ fontWeight: "semibold", marginBottom: 1 }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Your Name: {user.displayName}
              </Typography>
              <Typography
                sx={{ fontWeight: "semibold", marginBottom: 1 }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Email: {user.email}
              </Typography>
              <Typography
                sx={{ fontWeight: "semibold", marginBottom: 1 }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Service Name: {name}
              </Typography>
              <Typography
                sx={{ fontWeight: "semibold", marginBottom: 1 }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Price: {price} USD
              </Typography>
              <Box sx={{ width: "200px", margin: "auto" }}>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    width: "auto",
                    marginTop: "40px",
                    backgroundColor: 'black', 
                    ":hover": {backgroundColor: 'black'}
                  }}
                  type="submit"
                  variant="contained"
                >
                  Confirm Order
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
    );
};

export default CheckOut;