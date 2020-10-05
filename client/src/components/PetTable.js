import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, deleteMany } from "../actions/pet.actions";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Button
} from "@material-ui/core";
import PetTableRow from "./PetTableRow";

const PetTable = () => {
  const [selectedPets, setSelectedPets] = useState([]);
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.pets);

  useEffect(() => {
    const fetchPets = async () => {
      dispatch(await getAll());
    };

    fetchPets();
  }, [dispatch]);

  const onChange = (e, petId) => {
    const checked = e.target.checked;

    if (checked) {
      if (selectedPets.includes(petId)) {
        return;
      }
      setSelectedPets([...selectedPets, petId]);
    } else {
      setSelectedPets([...selectedPets.filter((id) => id !== petId)]);
    }
  };

  const onDeleteSelected = async () => {
    if (!selectedPets.length) {
      return;
    }

    dispatch(await deleteMany(selectedPets));
    dispatch(await getAll());
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#3f51b5" }}>
            <TableRow>
              <TableCell align="right" />
              <TableCell align="right" style={{ color: "white" }}>
                <Typography variant="h5">Alias</Typography>
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                <Typography variant="h5">Age</Typography>
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                <Typography variant="h5">Breed</Typography>
              </TableCell>
              <TableCell align="right" style={{ color: "white" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet) => (
              <PetTableRow pet={pet} onChange={onChange} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onDeleteSelected()}
      >
        Delete selected
      </Button>
    </>
  );
};

export default PetTable;
