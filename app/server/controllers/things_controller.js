const { Thing } = require("../models/index")

const getThings = async (req, res) => {
  const things = await Thing.findAll()

  res.status(200).json(things)
};

module.exports = { getThings };
