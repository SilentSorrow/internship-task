import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../../actions/user.actions";

const VerifyEmail = ({ history }) => {
  const { hash } = useParams();

  useEffect(() => {
    const verify = async() => {
      await verifyEmail(hash);
    };

    verify();
    history.push("/");
  }, [hash, history]);

  return <></>;
};

export default VerifyEmail;
