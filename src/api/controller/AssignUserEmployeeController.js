const { QueryTypes } = require("sequelize");
const { assineuseremployee, user } = require("../../config/dbConnection");
const db = require("../../config/dbConnection");

const mapUserToEmployee = async (req, res) => {
  try {
    const mapInsertData = await assineuseremployee.create(req.body);
    res.status(200).json({ msg: "user to employee data", data: mapInsertData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "not user map id" });
  }
};

const mapUserToEmployeeGet = async (req, res) => {
  const { Admin, User } = req.query;
  console.log("admin", Admin, User);
  try {
    const data = await db.sequelize.query(
      `select * from users as u 
        inner join assineuseremployees as a on a.User=u.id 
        where u.role='User' & u.id=${User} & a.isDelete='false' `,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json({ msg: "get data successfully", data: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "match data not get successfully all" });
  }
};

const mapUserToEmployeeById = async (req, res) => {
  const { employee, User } = req.query;
  console.log("admin", employee, User);
  try {
    const data = await db.sequelize.query(
      `select * from users as u 
              inner join assineuseremployees as a on a.User=u.id 
              where u.role='users' & u.id=${User} & Employee=${employee} & a.isDelete='false' `,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json({ msg: "data get by id ", data: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not get by id", err });
  }
};

const mapUserToEmployeeUpdate = async (req, res) => {
  const { ...rest } = req.body;
  const data = { User: rest.User };
  try {
    const updateData = await assineuseremployee.update(data, {
      where: {
        User: req.query.User,
      },
    });
    res.status(200).json({ msg: "update data successfull", data: updateData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "dont update" });
  }
};

const deleteUserToEmployeeData = async (req, res) => {
  const data = { isDelete: "true" };
  try {
    const deleteData = await assineuseremployee.update(data, {
      where: {
        User: req.query.User,
      },
    });
    res.status(200).json({ msg: "delete data count", data: deleteData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data do not delete", err });
  }
};
module.exports = {
  mapUserToEmployee,
  mapUserToEmployeeGet,
  mapUserToEmployeeById,
  mapUserToEmployeeUpdate,
  deleteUserToEmployeeData,
};
