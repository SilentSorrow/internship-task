import React from "react";
import "./PetItem.css";

const PetItem = ({ pet }) => {
  const { alias, age, breed } = pet;

  return (
    <>
      <span>{alias}</span>
      <span>{age}</span>
      <span>{breed}</span>
    </>
  );
};

export default PetItem;
