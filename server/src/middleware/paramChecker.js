const checkParams = ( type, params ) => {
  return (req, res, next) => {
    for (let i = 0; i < params.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(req[type], params[i])) {
        return res.status(400).json({});
      }
    }

    return next();
  };
};

module.exports = checkParams;

