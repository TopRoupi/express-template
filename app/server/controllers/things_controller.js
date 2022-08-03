// const axios = require("axios");
models = require("../../../db/models/index")

const Thing = models.Thing

const getThings = async (req, res) => {
  const things = await Thing.findAll()

  res.status(200).json(things)
};

module.exports = { getThings };
