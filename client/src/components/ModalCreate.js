import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { getAll, create } from "../actions/pet.actions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
} from "@material-ui/core";

const ModalCreate = () => {
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
    dispatch(await create(formData));
    setOpen(false);
    dispatch(await getAll());
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create new pet
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New pet</DialogTitle>
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
              inputRef={register({ required: true })}
            />
            <TextField
              name="age"
              label="Age"
              autoComplete="off"
              inputRef={register({ required: true })}
            />
            <TextField
              name="breed"
              label="Breed"
              autoComplete="off"
              inputRef={register({ required: true })}
            />
            <Button variant="contained" type="submit">
              Create
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

export default ModalCreate;
