const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/User");
const { addNewUser, getUsers } = require("../controllers/userController");

router.get("/users", verify, async (req, res) => {
  const admin = await User.findOne({ role: "admin" });
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
  
});

module.exports = router;
