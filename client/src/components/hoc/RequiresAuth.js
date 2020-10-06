import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

class RequiresAuth extends React.Component {
  componentDidMount() {
    this.checkAndRedirect();
  };

  componentDidUpdate() {
    this.checkAndRedirect();
  };

  checkAndRedirect() {
    const { redirect } = this.props;

    if (Cookies.get("SESS_ID")) {
      return;
    } 
    
    redirect();
    
  };

  render() {
    return (
      <>
        {Cookies.get("SESS_ID") ? (
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
