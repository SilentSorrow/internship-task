const initialState = {
  user: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "USER_LOAD": 
      return {
        ...state,
        user: action.payload
      };
    case "USER_ERROR":
      return {
        ...state,
        error: "Something went wrong..."
      }
    default: 
      return {
        ...state
      };
  };
};

export default reducer;