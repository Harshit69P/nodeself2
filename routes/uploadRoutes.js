const express = require('express');
const router = express.Router();
const upload = require('../controllers/uploadController');


router.post('/upload',upload.single("profileImage"), (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.send(err);
    } else {
      console.log(req.file);
      res.send('File uploaded!');
    }
  });
});

module.exports = router;
