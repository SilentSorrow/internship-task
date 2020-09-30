import React, { useEffect } from "react";
import "./PetList.css";
import { connect } from "react-redux";
import { petsLoadAll } from "../../../actions";
import PetItem from "../petItem/PetItem";

const PetList = (props) => {

  useEffect(() => {
    console.log(petsLoadAll());
    console.log(props);
  }, [props])

  return (
    <ul>
      {/* {pets && pets.map((pet) => {
        return (
          <li key={pet.id}>
            <PetItem pet={pet} />
          </li>
        );
      })} */}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    pets: state.pets,
  };
};

export default connect(mapStateToProps, { petsLoadAll })(PetList);
