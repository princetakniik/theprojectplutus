module.exports = (sequelize, Sequelize, DataTypes) => {
    const issueEmp = sequelize.define("issueemp", {
      empId: {
        type: DataTypes.BIGINT,
      },
      issueTitle: {
        type:DataTypes.STRING,
      },
      area: {
        type:DataTypes.STRING,
      },
      assignedTo: {
        type:DataTypes.STRING,
      },
      issueDescription: {
        type:DataTypes.STRING,
      },
      remarks: {
        type:DataTypes.STRING,
      },
      status: {
        type: Sequelize.ENUM("To Do", "Doing", "completed"),
       },
       isDelete :{
        type:DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    });
    return issueEmp;
  };