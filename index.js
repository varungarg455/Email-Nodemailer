require("dotenv").config();
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

//Step 1
let transporter = nodemailer.createTransport({
  //service: "gmail",
  host: "localhost",
  port: 25000,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".hbs" /* or '.handlebars' */,
      viewPath: __dirname + "/views/",
      layoutsDir: __dirname + "/views/",
      defaultLayout: "index",
      partialsDir: __dirname + "/views/"
    },
    viewPath: "./views/"
  })
);

//Step 2
let mailOptions = {
  from: "varungarg455@gmail.com",
  to: "varungarg455@gmail.com",
  subject: "This is a test mail",
  text: "<b>It works</b>",
  template: "index"
};

//Step 3
transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent");
  }
});
