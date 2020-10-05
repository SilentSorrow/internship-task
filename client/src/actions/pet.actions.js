import PetService from "../services/pet.service";

const petService = new PetService();

const getAll = async() => {
  try {
    const { data } = await petService.getAll();

    return {
      type: "PETS_LOAD_ALL",
      payload: data,
    };
  } catch(error) {
    return {
      type: "PET_ERROR"
    }; 
  };
};

const deleteMany = async(pets) => {
  try {
    await petService.deleteMany(pets);

    return {
      type: "",
    };
  } catch(error) {
    return {
      type: "PET_ERROR"
    }; 
  };
};

const findByAlias = async(alias) => {
  try {
    const { data } = await petService.findByAlias(alias);

    if (data) {
      return {
        type: "PET_FIND",
        payload: data
      };
    }
    return {
      type: "",
    }
  } catch(error) {
    return {
      type: "PET_ERROR"
    }; 
  };
};

const update = async(pet) => {
  try {
    await petService.update(pet);

    return {
      type: "",
    }
  } catch(error) {
    return {
      type: "PET_ERROR"
    }; 
  };
};

const create = async(pet) => {
  try {
    await petService.create(pet);

    return {
      type: "",
    }
  } catch(error) {
    return {
      type: "PET_ERROR"
    }; 
  };
};

export { getAll, deleteMany, findByAlias, update, create };
