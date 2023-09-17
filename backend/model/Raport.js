const mongoose = require("mongoose");
require("dotenv").config();

const raportSchema = mongoose.Schema({
  no: { type: Number, required: true },
  siswa: { type: mongoose.Schema.Types.ObjectId, ref: "siswa" },
  mapel: { type: mongoose.Schema.Types.ObjectId, ref: "mapel" },
  date: { type: Date, required: true },
  nilai: { type: Number },
});

const Raport = new mongoose.model("raport", raportSchema);

exports.Raport = Raport;
exports.raportSchema = raportSchema;
