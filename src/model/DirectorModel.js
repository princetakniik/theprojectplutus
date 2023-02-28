module.exports = (sequelize, Sequelize, DataTypes) => {
  const DirectorDetails = sequelize.define("directordetails", {
    name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      mobile:{
type:DataTypes.BIGINT
      },
      gstnumber:{
        type:DataTypes.STRING
      },
      companyaddress :{
        type:DataTypes.STRING
      },
      dinnumber:{
        type:DataTypes.STRING
      },
      validfrom:{
type: DataTypes.DATE
      },
      validtill:{
        type: DataTypes.DATE
      },
      isDeleate: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
  });
  return DirectorDetails;
};
