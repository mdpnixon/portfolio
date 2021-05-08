const express = require('express');
const router = express.Router();
const emailCtrl = require('../../controllers/api/emails');
const nodemailer = require('nodemailer');

// router.post('/', emailCtrl.create)
router.post('/', function(req, res, next) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    })
  
    const mailOptions = {
      from: `${req.body.email}`,
      to: process.env.EMAIL,
      subject: `${req.body.name}`,
      text: `${req.body.message}`,
      replyTo: `${req.body.email}`
    }
    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res)
      }
    })
})

module.exports = router;