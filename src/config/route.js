const nonExistentRoutes = (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'No route exists'
  });
};

module.exports = () => nonExistentRoutes;