import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { onSetModalTm, onUptTms} from "../../actions";

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

export default function DisplayModalTm() {
  const setModalTm = useSelector((state) => state.setModalTm);
  const status = useSelector((state) => state.setStatus);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(onSetModalTm(false));
  };


  const handleClickYes = () => {
    dispatch(onUptTms(status.tid, status.status));
    handleClose();
  };

  const handleClickNo = () => {
    handleClose();
  };

  return (
    <div>
      <Modal
        open={setModalTm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to change the status?{" "}
            {"(The changes cannot be undone)"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button variant="contained" sx={{marginRight:3, backgroundColor: "#040c63"}} onClick={handleClickYes}>Yes</Button>
            <Button variant="contained" sx={{backgroundColor: "white", color:"black"}}onClick={handleClickNo}>No</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
