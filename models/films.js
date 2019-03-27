module.exports = function(sequelize, DataTypes) {
  var Film = sequelize.define(
    "Film", {
      title: DataTypes.STRING,
      year: DataTypes.STRING,
      genre: DataTypes.STRING,
      price: DataTypes.STRING,
      format: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Film;
};