module.exports = (sequelize, Sequelize, DataTypes) => {
    const publishAnnounce = sequelize.define("publishannounce", {
        clients: {
            type: DataTypes.STRING,
          },
          employees : {
            type : DataTypes.STRING
          },
          isDelete :{
            type:DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        }
        })    
return publishAnnounce
}