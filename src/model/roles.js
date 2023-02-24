module.exports = (sequelize, Sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        role: {
            type: DataTypes.ENUM("Admin", "User", "Employee"),
          },
    });
  
    return User;
  };
  
  