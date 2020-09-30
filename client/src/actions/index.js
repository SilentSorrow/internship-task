import PetService from "../services/petService";

const petService = new PetService();

const petsLoadAll = () => {
  const loadedPets = petService.getAllPets();

  return {
    type: "PETS_LOAD_ALL",
    payload: loadedPets,
  };
};

export { petsLoadAll };
