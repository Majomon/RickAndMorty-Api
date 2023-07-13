const axios = require("axios");
const { URL } = process.env;

const prueba = (req, res) => {
  /*   id, name, species, image y gender. */
  axios
    .get(`${URL}/character/`)
    .then((response) => {
      const resp = response.data;
      res.status(200).json(resp);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = prueba;
