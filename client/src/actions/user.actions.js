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
    await userService.signIn(user);

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
    await userService.verifyEmail(hash);

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
