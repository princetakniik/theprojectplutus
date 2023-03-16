const { issueemp, user } = require("../../config/dbConnection");
const db = require("../../config/dbConnection");
const { QueryTypes } = require("sequelize");

const issueCreate = async (req, res) => {
  console.log("data", req.body);
  try {
    const createIssue = await issueemp.create(req.body);
    res
      .status(200)
      .json({ msg: "issue create successfully", data: createIssue });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "inCorrect data", err });
  }
};

const issueGet = async (req, res) => {
  try {
    const getissue = await db.sequelize
      .query(`select ie.id,CONCAT(u.firstName,' ',u.lastName) as name,ie.empId,ie.issueTitle,ie.area,ie.assignedTo,ie.issueDescription,ie.remarks,ie.status  from users as u
      inner join issueemps as ie on u.id=ie.empId 
      where u.role='Employee' `, {
          type: QueryTypes.SELECT,
        });
    res.status(200).json({ msg: "data get successfully", data: getissue });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not found", err });
  }
};

const issueGetById = async (req, res) => {
  const id = req.query.id;
  try {
    const getIssuebyId = await db.sequelize
      .query(`select ie.id,CONCAT(u.firstName,' ',u.lastName) as name,ie.empId,ie.issueTitle,ie.area,ie.assignedTo,ie.issueDescription,ie.remarks,ie.status  from users as u
    inner join issueemps as ie on u.id=ie.empId 
    where u.role='Employee' & ie.id=${id} & ie.isDelete='false' `, {
        type: QueryTypes.SELECT,
      });
    res.status(200).json({ msg: "issue data get by id", data: getIssuebyId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not found by id", err });
  }
};

const issueUpdate = async (req, res) => {
  const { ...rest } = req.body;
  console.log("rest", rest);
  try {
    const updateIssue = await issueemp.update(rest, {
      where: {
        id: req.query.id,
      },
    });
    res
      .status(200)
      .json({ msg: "update data successfully", data: updateIssue });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "issue data not update", err });
  }
};

const issueDelete = async (req, res) => {
  const { id } = req.query;
  const data = { isDelete: "true" };
  try {
    const deleteIssueById = await issueemp.update(data, {
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ msg: "data delete successfully", data: deleteIssueById });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "data not delete", err });
  }
};

module.exports = {
  issueCreate,
  issueGet,
  issueGetById,
  issueUpdate,
  issueDelete,
};
