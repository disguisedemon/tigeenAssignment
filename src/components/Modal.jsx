import * as React from "react";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ModalPromt = (open, handleClose, value1) => {
  console.log("was here");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Card sx={{ width: 500, height: 480, marginLeft: 4, marginTop: 4 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image={value1.thumbnail.large}
                alt="green iguana"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {value1.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {value1.content}
              </Typography>
              <Typography
                style={{ marginTop: 12 }}
                variant="body2"
                color="text.secondary"
              >
                {value1.author.name}
                {"-"}
                {value1.author.role}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPromt;
