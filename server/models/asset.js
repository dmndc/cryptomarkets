module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('asset', {
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Asset.associate = function(models) {
    // associations can be defined here
  };
  return Asset;
};
