import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

class RequiresAuth extends React.Component {
  componentDidMount() {
    this.checkAndRedirect();
  };

  componentDidUpdate() {
    this.checkAndRedirect();
  };

  checkAndRedirect() {
    const { redirect } = this.props;

    if (localStorage.getItem("SESS_ID")) {
      return;
    } 
    
    redirect();
    
  };

  render() {
    return (
      <>
        {localStorage.getItem("SESS_ID") ? (
          this.props.children
        ) : (
          <Redirect to={"/signin"} />
        )}
      </>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      redirect: () => push("/signin"),
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(RequiresAuth);
