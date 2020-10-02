import { combineReducers } from "redux";
import pets from "./pet.reducer";
import user from "./user.reducer";

export default combineReducers({
  pets,
  user
})