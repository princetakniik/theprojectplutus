module.exports = (sequelize, Sequelize, DataTypes) => {
    const Compliance = sequelize.define("compliance", {
        financial: {
            type: DataTypes.STRING,
          },
          general : {
            type : DataTypes.STRING
          },
          isDeleate: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
          }
        })    
return Compliance
}