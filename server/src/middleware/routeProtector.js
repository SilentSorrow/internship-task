const routesWithoutSession = require("../options");

const protectRoutes = (req, res, next) => {
  if (routesWithoutSession.includes(req.path)) {
    return next();
  }

  if (!req.session.userId) {
    return res.status(401).json({});
  }

  next();
};

module.exports = protectRoutes;