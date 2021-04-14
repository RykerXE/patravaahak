const healthChecker = (_req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Server is healthy'
  });
};

module.exports = {
  healthChecker
};
