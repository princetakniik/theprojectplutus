module.exports = (sequelize, Sequelize, DataTypes) => {
    const Makeannounce = sequelize.define("makeannounce", {
        announce: {
            type: DataTypes.STRING,
          },
          isDeleate: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
          }
        })    
return Makeannounce
}