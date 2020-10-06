import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../../actions/user.actions";

const VerifyEmail = () => {
  const { hash } = useParams();

  useEffect(() => {
    const verify = async() => {
      await verifyEmail(hash);
    };

    verify();
  }, [hash]);

  return <></>;
};

export default VerifyEmail;
