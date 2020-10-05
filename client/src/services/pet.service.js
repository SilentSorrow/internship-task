import api from "./api";

export default class PetService {
  async getAll() {
    return await api.get("pets/");
  };

  async deleteMany(pets) {
    return await api.post("pets/deleteMany", { pets });
  };

  async findByAlias(alias) {
    return await api.post("pets/findByAlias", alias );
  };

  async update(pet) {
    return await api.put("pets/", pet );
  };

  async create(pet) {
    return await api.post("pets/create", pet );
  };
};