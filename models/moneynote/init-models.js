var DataTypes = require("sequelize").DataTypes;
var _mst_authorization = require("./mst_authorization");

function initModels(sequelize) {
  var mst_authorization = _mst_authorization(sequelize, DataTypes);


  return {
    mst_authorization,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
