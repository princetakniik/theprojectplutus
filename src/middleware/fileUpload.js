const multer = require("multer");
const fs = require("fs");
const path = require("path");

module.exports = (app) => {

  let filestorageEngine = multer.diskStorage({
    destination: "upload",

    filename: (req, file, cb) => {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    },
  });

  let upload = multer({ storage: filestorageEngine });

  app.post("/uploads", upload.array("file", 4), async (req, res) => {
    let base_url = process.env.basePort;
    let doc_url = req.files
      ? req.files.map((i) => `${base_url}/profile/${i.filename}`)
      : [];
  console.log('doc_url',doc_url);
    return res.json({ status: "suceess",message:"data upload sucessfully", url: doc_url });
  });

};


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     let dir = "./uploads";
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     cb(null, dir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({ storage: storage }).array("files", 12)

// module.exports = {
//   upload,
// };
