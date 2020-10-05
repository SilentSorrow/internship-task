const initialState = {
  pets: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PETS_LOAD_ALL":
      return {
        ...state,
        pets: action.payload,
        error: null,
      };
    case "PET_FIND":
      return {
        ...state,
        pets: [action.payload],
      };
    case "PET_ERROR":
      return {
        ...state,
        error: "Something went wrong...",
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
