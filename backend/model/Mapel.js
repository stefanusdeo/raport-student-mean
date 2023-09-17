const mongoose = require("mongoose");
require("dotenv").config();

const mapelSchema = mongoose.Schema({
  kodeMapel: {
    type: String,
    unique: true,
    required: true,
  },
  namaMapel: { type: String, minLength: 3, maxLength: 255, required: true },
});

const Mapel = new mongoose.model("mapel", mapelSchema);

exports.Mapel = Mapel;
exports.mapelSchema = mapelSchema;
