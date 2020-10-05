import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getAll, update } from "../actions/pet.actions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
} from "@material-ui/core";

const ModalUpdate = ({ pet }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCreatePet = async (formData) => {
    dispatch(await update({ ...formData, id: pet._id }));
    setOpen(false);
    dispatch(await getAll());
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update existing pet</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(onCreatePet)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "200px",
            }}
          >
            <TextField
              name="alias"
              label="Alias"
              autoComplete="off"
              defaultValue={pet.alias}
              inputRef={register({ required: true })}
            />
            <TextField
              name="age"
              label="Age"
              autoComplete="off"
              defaultValue={pet.age}
              inputRef={register({ required: true })}
            />
            <TextField
              name="breed"
              label="Breed"
              autoComplete="off"
              defaultValue={pet.breed}
              inputRef={register({ required: true })}
            />
            <Button variant="contained" type="submit">
              Update
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalUpdate;
