module.exports = (sequelize, Sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    emailOtp: {
      type: DataTypes.BIGINT,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.BIGINT,
    },
    phoneOtp: {
      type: DataTypes.BIGINT,
    },
    isDelete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    plainType:{
      type:DataTypes.STRING
    },
    startData:{
      type:DataTypes.DATE
    },
    endDate:{
      type:DataTypes.DATE
    },
    roleEnum: {
      type: DataTypes.ENUM("Admin", "User", "Employee"),
    },
  });

  return User;
};
