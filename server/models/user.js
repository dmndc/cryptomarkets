module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  });

  User.associate = models => {
    User.hasMany(models.Asset, {
      foreignKey: 'symbol',
      as: 'assets'
    });
  };

  return User;
};
