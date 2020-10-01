import PetService from "../services/pet.service";

const petService = new PetService();

const petsLoadAll = () => {
  const loadedPets = petService.loadAllPets();

  return {
    type: "PETS_LOAD_ALL",
    payload: loadedPets,
  };
};

export { petsLoadAll };
