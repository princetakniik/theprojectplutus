module.exports = (sequelize, Sequelize, DataTypes) => {
    const Compliance = sequelize.define("compliance", {
        financial: {
            type: DataTypes.STRING,
          },
          general : {
            type : DataTypes.STRING
          },
          isDelete :{
            type:DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
          complainDate :{
            type:DataTypes.DATE
          }
        })    
return Compliance
}