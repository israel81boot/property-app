module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        username: DataTypes.STRING,
        userpassword: DataTypes.STRING,
        userfirstname: DataTypes.STRING,
        userlastname: DataTypes.STRING,
        usertype: DataTypes.STRING,
        userphoto: DataTypes.STRING
    });
    return User;
  };