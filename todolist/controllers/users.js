const UserModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const saltRouds = 10;
const salt = bcrypt.genSaltSync(saltRouds);

const getLogin = (req, res, next) => {
  res.render("users/login");
};

const postLogin = (req, res, next) => {
  console.log("Nó chạy rồi", req.body);
  UserModel.findOne({ email: req.body.email }, function (err, response) {
    console.log("Đây là kết quả ", response);
    const checkpass = bcrypt.compareSync(req.body.password, response.password);
    if (checkpass) {
      console.log("ok rồi đó");
      res.redirect("/todolist");
    } else {
      res.redirect("/users/login", { loi: "Tai khoan không dung" });
    }
  });
};

const getSignUp = (req, res, next) => {
  res.render("users/signup");
};

const postSignup = (req, res, next) => {
  console.log("Du liệu gửi lên là ", req.body);

  var data = new UserModel();
  data.email = req.body.email;
  data.password = bcrypt.hashSync(req.body.password, salt);
  data.save(function (err) {
    res.redirect("/users/login");
  });
};

const getLogOut = (req, res, next) => {
  res.render("users/login");
};

module.exports = {
  getLogin,
  getSignUp,
  postLogin,
  postSignup,
  getLogOut,
};
