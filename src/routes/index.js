const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs = require("../utils/favs");

const router = Router();

router.get("/", (req, res) => {
  res.send("Holis. Estas en el Home de la Api");
});

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

//! Ruta a favoritos con distintos request
router.post("/fav", (req, res) => {
  const newFavorite = req.body;
  const existingFavorite = favs.find((char) => char.id === newFavorite.id);

  if (existingFavorite) {
    res.status(400).json({ error: "El personaje ya está en favoritos" });
  } else {
    favs.push(newFavorite);
    res.status(200).json(favs);
  }
});

router.get("/fav", (req, res) => {
  res.status(200).json(favs);
});

router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id !== parseInt(id));
  res.status(200).json({ status: "Ok" });
});

module.exports = router;
