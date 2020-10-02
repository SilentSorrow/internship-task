import api from "./api";

export default class UserService {
  async getUser() {
    return await api.get("/users/me");
  };

  async signIn(user) {
     return await api.post("/users/signIn", user);
  };

  async signUp(user) {
    return await api.post("/users/signUp", user);
  };

  async verifyEmail(hash) {
    return api.get("/users/verifyEmail?hash=" + hash);
  };

  async resendEmail(user) {
    return api.post("/users/resendEmail", user);
  }

  async logOut() {
    return api.get("/users/logOut");
  }
};