const siswa = require("./siswa");
const mapel = require("./mapel");
const rapot = require("./raport");
module.exports = function (app) {
  app.use("/api/siswa", siswa);
  app.use("/api/mapel", mapel);
  app.use("/api/rapot", rapot);
};
