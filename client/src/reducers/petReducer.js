const initialState = {
  pets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PETS_LOAD_ALL":
      return {
        pets: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
