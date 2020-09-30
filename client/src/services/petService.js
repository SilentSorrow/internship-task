export default class PetStoreService {
  getAllPets(){
    return [
      {
        id: 1,
        alias: "Loh",
        age: 6,
        breed: "Sobaka"
      },
      {
        id: 2,
        alias: "Richard",
        age: 19,
        breed: "Daun"
      },
    ];
  };
};