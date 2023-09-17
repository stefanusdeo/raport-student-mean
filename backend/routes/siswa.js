const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { Siswa } = require("../model/Siswa");

router.get("/", async (req, res) => {
  try {
    const { lokasi, kelas } = req.query;

    let query = {};

    if (lokasi) {
      query.lokasi = { $regex: ".*" + lokasi + ".*" };
    }

    if (kelas) {
      query.kelas = { $regex: ".*" + kelas + ".*" };
    }

    const siswa = await Siswa.find(query).sort("namaMurid");

    return res.send({ data: siswa });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
});

router.post(
  "/",
  [
    check("namaMurid", "Name is Required").not().isEmpty(),
    check("namaMurid", "Name min length 3").isLength({ min: 3 }),
    check("lokasi", "Name is Required").not().isEmpty(),
    check("lokasi", "Name min length 3").isLength({ min: 3 }),
    check("kelas", "Name min length 1").isLength({ min: 1 }),
    check("kelas", "Name is Required").not().isEmpty(),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty())
      return res.status(400).send({
        errors: err.array(),
      });
    try {
      const { namaMurid, lokasi, kelas } = req.body;
      const siswa = await Siswa.find().sort("namaMurid");

      const siswaCheck = siswa.find((data) => data.namaMurid === namaMurid);
      if (siswaCheck)
        return res.status(400).send({ message: "Student already exists" });

      let student = new Siswa({
        kodeSiswa: siswa.length++,
        namaMurid,
        lokasi,
        kelas,
      });

      await student.save();
      return res.send({ message: "Success add Student" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error });
    }
  }
);

module.exports = router;
