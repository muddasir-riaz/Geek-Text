const router = require("express").Router();
const auth = require("../../loginAuth/auth");
const authRoute = require("./auth");
const usersRoute = require("./user");

router.use("/auth", authRoute);
router.use("/user", auth.checkToken, usersRoute);
router.use("/profile", auth.checkToken, usersRoute);

module.exports = router;
