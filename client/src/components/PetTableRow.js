import React from "react";
import { TableRow, TableCell, Checkbox, Button } from "@material-ui/core";

const PetTableRow = ({ pet, onChange, onUpdate }) => {
  return (
    <TableRow>
      <TableCell align="right">
        <Checkbox onChange={(e) => onChange(e, pet._id)} />
      </TableCell>
      <TableCell align="right">{pet.alias}</TableCell>
      <TableCell align="right">{pet.age}</TableCell>
      <TableCell align="right">{pet.breed}</TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          onClick={() => onUpdate()}
        >
          Update
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default PetTableRow;
