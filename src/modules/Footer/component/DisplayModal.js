import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { onSetModal } from "../../actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DisplayModal() {
  const setModal = useSelector((state) => state.setModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(onSetModal(false));
  };

  return (
    <div>
      <Modal
        open={setModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            Terms and Conditions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: "justify" }}>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern our relationship with you in relation to this
            website. If you disagree with any part of these terms and
            conditions, please do not use our website. The term 'us' or 'we'
            refers to the owner of the website. The term 'you' refers to the
            user or viewer of our website.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
