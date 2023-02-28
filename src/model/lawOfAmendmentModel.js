module.exports = (sequelize, Sequelize, DataTypes) => {
    const LawOfAmendment = sequelize.define("lawOfAmendment", {
        law:{
            type:DataTypes.STRING
        },
        isDeleate:{
            type:DataTypes.BOOLEAN, allowNull: true, defaultValue: false            
        },

    });

    
  
    return LawOfAmendment;
}