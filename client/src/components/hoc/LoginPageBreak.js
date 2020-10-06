import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

class LoginPageBreak extends React.Component {
  componentDidMount() {
    this.checkAndRedirect();
  };

  componentDidUpdate() {
    this.checkAndRedirect();
  };

  checkAndRedirect() {
    const { redirect } = this.props;
    if (Cookies.get("SESS_ID")) {
      redirect();
    }
  };

  render() {
    return (
      <>
        {Cookies.get("SESS_ID") ? <Redirect to={"/"} /> : this.props.children}
      </>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      redirect: () => push("/"),
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(LoginPageBreak);
