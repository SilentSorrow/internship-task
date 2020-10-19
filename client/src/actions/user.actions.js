import UserService from "../services/user.service";

const userService = new UserService();

const getUser = async () => {
  try {
    const { data } = await userService.getUser();

    return {
      type: "USER_LOAD",  
      payload: data
    };
  } catch(error) {
    return {
      type: "USER_ERROR"
    }   
  }
};

const signIn = async (user) => {
  try {
    const { data } = await userService.signIn(user);

    localStorage.setItem("SESS_ID", data.sess);

    return {
      type: "",
    };
  } catch(error) {
    return {
      type: "USER_ERROR",
    }
  }
};

const signUp = async (user) => {
  try {
    await userService.signUp(user);

    return {
      type: "",
    };
  } catch(error) {
    return {
      type: "USER_ERROR",
    }
  }
};

const verifyEmail = async (hash) => {
  try {
    const { data } = await userService.verifyEmail(hash);

    localStorage.setItem("SESS_ID", data.sess);

    return {
      type: "",
    };
  } catch(error) {
    return {
      type: "USER_ERROR",
    }
  }
};

const resendEmail = async (user) => {
  try {
    await userService.resendEmail(user);

    return {
      type: "",
    };
  } catch(error) {
    return {
      type: "USER_ERROR",
    }
  }
};

const logOut = async (user) => {
  try {
    await userService.logOut(user);

    return {
      type: "",
    };
  } catch(error) {
    return {
      type: "USER_ERROR",
    }
  }
};

export { getUser, signIn, signUp, verifyEmail, resendEmail, logOut };
