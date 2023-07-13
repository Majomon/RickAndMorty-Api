const axios = require("axios");
const { KEY } = process.env;

const getCharDetail = (req, res) => {
  const { id } = req.params;
  /*   id, name, species, image y gender. */
  axios
    .get(`${URL}/character/${id}`)
    .then((response) => {
      const { id, name, species, image, gender, origin } = response.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharDetail;
