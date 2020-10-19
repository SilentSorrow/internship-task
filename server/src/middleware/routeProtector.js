const routesWithoutSession = require("../options");
const User = require("../models/user");
const { getSession } = require("../session");

const protectRoutes = async (req, res, next) => {
  if (routesWithoutSession.includes(req.path)) {
    return next();
  }

  let sess;
  if (req.headers["app-auth"]) {
    sess = await getSession(req.headers["app-auth"]);
  }

  if (!sess) {
    return res.status(401).json({});
  }
  req.user = await User.findById(await getSession(req.headers["app-auth"]));
  next();
};

module.exports = protectRoutes;