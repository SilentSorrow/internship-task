import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petsLoadAll } from "../actions";
import { 
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow, TableCell,
  Paper,
  Typography,
  Button,
  Checkbox
} from "@material-ui/core";

const PetList = () => {
const dispatch = useDispatch();
const pets = useSelector((state) => state.pets.pets)

  useEffect(() => {
    dispatch(petsLoadAll());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{backgroundColor: "#3f51b5"}}>
          <TableRow>
            <TableCell align="right" />
            <TableCell align="right"  style={{color: "white"}}>
              <Typography variant="h5">
                ALIAS
              </Typography>
            </TableCell>
            <TableCell align="right"  style={{color: "white"}}>
              <Typography variant="h5">
                AGE
              </Typography>
            </TableCell>
            <TableCell align="right"  style={{color: "white"}}>
              <Typography variant="h5">
                BREED
              </Typography>
            </TableCell>
            <TableCell align="right"  style={{color: "white"}}>
              <Typography variant="h5">
                ACTION
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pets.map((pet) => (
            <TableRow key={pet.id}>
              <TableCell align="right">
              <Checkbox
              />
              </TableCell>
              <TableCell align="right">{pet.alias}</TableCell>
              <TableCell align="right">{pet.age}</TableCell>
              <TableCell align="right">{pet.breed}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="primary">
                  UPDATE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PetList;
