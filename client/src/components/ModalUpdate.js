import React, { useEffect, useState } from "react";
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

const ModalUpdate = ({ pet, emptyPet }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    handleClickOpen();
  }, [pet]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    emptyPet();
  };

  const onUpdatePet = async (formData) => {
    dispatch(await update({ ...formData, id: pet._id }));
    setOpen(false);
    dispatch(await getAll());
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Update existing pet</DialogTitle>
      <DialogContent>
        <form
          onSubmit={handleSubmit(onUpdatePet)}
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
  );
};

export default ModalUpdate;
