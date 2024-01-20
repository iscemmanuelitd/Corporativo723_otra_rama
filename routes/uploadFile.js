var express = require('express');
var formidable = require("formidable")
var fs = require("fs")
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log(files.misFiles[0].filepath)
    var oldpath = files.misFiles[0].filepath;
    var newpath = "uploadFile\\INE\\" + files.misFiles[0].originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write('File uploaded and moved!');
      res.end();
    });
  })
});
module.exports = router;