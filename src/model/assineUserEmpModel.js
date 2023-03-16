module.exports = (sequelize, Sequelize, DataTypes) => {
  const AssineUserEmployee = sequelize.define("assineuseremployee", {
    Admin: {
      type: DataTypes.BIGINT,
    },
    User: {
      type: DataTypes.BIGINT,
    },
    Employee: {
      type: DataTypes.BIGINT,
    },
    isDelete :{
      type:DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
  }
  });
  return AssineUserEmployee;
};
