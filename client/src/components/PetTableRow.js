import React from "react";
import { TableRow, TableCell, Checkbox } from "@material-ui/core";
import ModalUpdate from "./ModalUpdate";

const PetTableRow = ({ pet, onChange }) => {
  return (
    <TableRow key={pet._id}>
      <TableCell align="right">
        <Checkbox onChange={(e) => onChange(e, pet._id)} />
      </TableCell>
      <TableCell align="right">{pet.alias}</TableCell>
      <TableCell align="right">{pet.age}</TableCell>
      <TableCell align="right">{pet.breed}</TableCell>
      <TableCell align="right">
        <ModalUpdate pet={pet} />
      </TableCell>
    </TableRow>
  );
};

export default PetTableRow;
