const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/sendemail', (req, res)=> {
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      Username:'huevang888@gmail.com',
      Password:'hue888:)'
    }
  })
  const option={
    from:'huevang888@gmail.com',
    to:'huevang999@gmail.com',
    subject:'Test nodemailer',
    html:`
    <p>Hello world I am from nodemailer</p><img src:"https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg?crop=0.66541xw:1xh;center,top&resize=980:*" />
    `
  }
  transporter.sendMail(option, (err , info) => {
    if(err){
      console.log('err',err)
      return res.status(200).json({RespCode:400,RespMessage:'bad',RespError:err})
    }
    else{
      console.log('send' + info.response)
      
      return res.status(200).json({RespCode:200,RespMessage:'good'})
    }
  })
});
module.exports = router;
