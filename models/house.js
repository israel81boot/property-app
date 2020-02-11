module.exports = function(sequelize, DataTypes) {
    var House = sequelize.define("house", {
      adress: DataTypes.STRING,
      bed: DataTypes.INTEGER,
      bath: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      author: DataTypes.STRING
    });
    return House;
  };