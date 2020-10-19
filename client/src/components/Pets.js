import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../actions/pet.actions";
import SearchForm from "./SearchForm";
import PetTable from "./PetTable";

const PetList = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.pets);

  useEffect(() => {
    const fetchPets = async () => {
      dispatch(await getAll());
    };

    fetchPets();
  }, [dispatch]);

  return (
    <>
      {pets.length !== 0 && (
        <>
          <SearchForm />
          <PetTable />
        </>
      )}
    </>
  );
};

export default PetList;
