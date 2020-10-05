import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  getAll, 
  findByAlias as fndByAlias,
} from "../actions/pet.actions";
import { TextField, Button } from "@material-ui/core";

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const findByAlias = async (formData) => {
    dispatch(await fndByAlias(formData));
  };

  const onReset = async () => {
    dispatch(await getAll());
  };

  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <form onSubmit={handleSubmit(findByAlias)}>
        <TextField
          name="alias"
          label="Alias"
          autoComplete="off"
          inputRef={register({ required: true })}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      <div>
        <Button variant="contained" onClick={() => onReset()}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
