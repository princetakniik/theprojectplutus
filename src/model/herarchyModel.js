module.exports = (sequelize, Sequelize, DataTypes) => {
  const Hierarchy = sequelize.define("hierarchy", {
    name: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.STRING,
    },
    isDelete :{
      type:DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
  }
  });
  return Hierarchy;
};
