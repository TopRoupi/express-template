const axios = require("axios");

const getThings = (req, res) => {
  // axios
  //   .get(movieUrl)
  //   .then((apiRes) => {
  //     apiRes.data.Search !== undefined
  //       ? res.status(200).json(apiRes.data.Search)
  //       : res.status(404).json({ message: "Entry not found" });
  //   })
  //   .catch((err) =>
  //     res.status(500).json({ message: "Server Side Error, Booh" })
  //   );

  // get things from the database here
  res.status(200).json({"a": ";;;;--;;;;;;;;;"})
};

module.exports = { getThings };
