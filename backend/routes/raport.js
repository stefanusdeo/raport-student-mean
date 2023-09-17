const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const { check, validationResult } = require("express-validator");
const { Raport } = require("../model/Raport");
const { Siswa } = require("../model/Siswa");
const { Mapel } = require("../model/Mapel");

router.get("/", async (req, res) => {
  try {
    const { mapel } = req.query;
    let query = {};
    if (mapel) {
      const selectedMapel = await Mapel.findOne({ namaMapel: mapel });
      if (selectedMapel) query.mapel = selectedMapel._id;
    }
    const raport = await Raport.find(query)
      .populate({
        path: "siswa",
        options: { sort: { namaSiswa: 1 } },
      })
      .populate({ path: "mapel" });

    return res.send({ data: raport });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
});

router.post("/", [check("date", "Date is Required")], async (req, res) => {
  try {
    const { namaMurid, namaMapel, tglTest, nilai, rapotId } = req.body;

    const siswaId = await Siswa.findOne({ namaMurid: namaMurid });

    const mapelId = await Mapel.findOne({ namaMapel: namaMapel });
    if (!siswaId) return res.status(404).send({ message: "siswa not found" });
    if (!mapelId) return res.status(404).send({ message: "mapel not found" });
    if (rapotId) {
      // Jika rapotId ada, maka ini adalah operasi edit
      const existingRaport = await Raport.findById(rapotId);
      if (!existingRaport) {
        return res.status(404).send({ message: "Raport not found" });
      }

      // Update data yang ada
      existingRaport.siswa = siswaId._id;
      existingRaport.mapel = mapelId._id;
      existingRaport.date = tglTest;
      existingRaport.nilai = nilai;

      await existingRaport.save();
      return res.send({ message: "Raport updated successfully" });
    } else {
      const countReport = await Raport.count();

      let report = new Raport({
        no: countReport + 1,
        siswa: siswaId._id,
        mapel: mapelId._id,
        date: tglTest,
        nilai,
      });

      await report.save();
      return res.send({ message: "success" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
});

module.exports = router;
