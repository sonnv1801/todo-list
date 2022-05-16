const express = require("express");
// var router = express.Router();

// router.get("/login", function (req, res, next) {
//   res.send("Day ta trang login");
// });

// router.get("/signup", function (req, res, next) {
//   res.send("Day ta trang signup");
// });

// router.get("/logout", function (req, res, next) {
//   res.send("Day ta trang logout");
// });

const {
  getLogin,
  getSignUp,
  postLogin,
  postSignup,
} = require("../controllers/users");

var router = express.Router();

router.get("/login", getLogin);
router.post("/login", postLogin);

router.get("/signup", getSignUp);
router.post("/signup", postSignup);

module.exports = router;
