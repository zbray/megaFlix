module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.TEXT
  });
  return User;
};

//updated keys of sequelize to prep for authentication