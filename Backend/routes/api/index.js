const router = require("express").Router();
const auth = require('../../loginAuth/auth');
const authRoute = require('./auth');
const usersRoute = require('./user');

router.use('/auth', authRoute);
router.use("/profile_management", auth.checkToken, usersRoute);


module.exports = router;