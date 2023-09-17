const mongoose = require("mongoose");
require("dotenv").config();

const siswaSchema = mongoose.Schema({
  kodeSiswa: { type: Number, required: true, unique: true },
  namaMurid: { type: String, minLength: 3, maxLength: 255, required: true },
  lokasi: { type: String, minLength: 3, required: true },
  kelas: { type: String, minLength: 1, required: true },
});

const Siswa = new mongoose.model("siswa", siswaSchema);

exports.Siswa = Siswa;
exports.siswaSchema = siswaSchema;
