module.exports = (sequelize, Sequelize, DataTypes) => {
    const userDetails = sequelize.define("userdetails", {
        email:{
            type:DataTypes.STRING
        },
        mobile:{
            type:DataTypes.BIGINT
        },
        companyName:{
            type:DataTypes.STRING
            },
            pan:{
                type:DataTypes.STRING
            },
            gstn:{
                type:DataTypes.STRING
            },
            mailOfSpoc:{
                type:DataTypes.STRING
            },
        spocForPlutos:{
            type:DataTypes.STRING
        },
        cin:{
            type:DataTypes.STRING
        },
        tan:{
            type:DataTypes.STRING
        },
        gstIn:{
            type:DataTypes.STRING
        },
        registeredAddress:{
            type:DataTypes.STRING
        },
        isDelete :{
            type:DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        }

    });
  
    return userDetails;
}