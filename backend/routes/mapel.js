const express = require("express");
const router = express.Router();

const { Mapel } = require("../model/Mapel");
const { check, validationResult } = require("express-validator");

router.get("/", async (req, res) => {
  try {
    const mapels = await Mapel.find().sort("kodeMapel");

    return res.send({ data: mapels });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
});

router.post(
  "/",
  [
    check("namaMapel", "Nama Mapel is Required").not().isEmpty(),
    check("namaMapel", "Nama Mapel min length 3").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty())
      return res.status(400).send({
        errors: err.array(),
      });

    const { namaMapel } = req.body;

    try {
      const listMapel = await Mapel.find().sort("namaMapel");

      const checkMapel = listMapel.find((data) => data.namaMapel === namaMapel);

      if (checkMapel) res.status(400).send({ message: "Mapel already exists" });
      let mapel = new Mapel({
        kodeMapel: `IP${listMapel.length + 1}`,
        namaMapel,
      });

      await mapel.save();
      return res.send({ message: "Success add Data" });
    } catch (error) {
      return res.status(500).send({ error });
    }
  }
);

module.exports = router;
