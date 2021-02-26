const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/User");
const { addNewUser, getUsers } = require("../controllers/userController");
const Menu = require("../models/Menu");
const jwt = require('jsonwebtoken');

//Add Menu by User
router.post("/food", verify,  async (req, res) => {
  //const admin = await User.findOne({ role: "admin" });
  const token = req.header('auth-token');
  const menu = new Menu({
    monday: req.body.monday,
    tuesday: req.body.tuesday,
    wednesday: req.body.wednesday,
    thursday: req.body.thursday,
    friday: req.body.friday
  });
  const savedMenu = await menu.save();
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if(err){
      res.sendStatus(403);
    } else {
      try {
        res.json({user, savedMenu});
      } catch (err) {
        res.status(400).send(err);
      }
    }
  }) 
})

//Get List of Meals Available for a user
router.get("/food/:id", verify, async (req, res) => {
  //var id = req.params.id;
  //const userid = await User.findOne({ _id: id });
  await Menu.findOne({savedMenu: req.params.user.id}, (err, menu) => {
    if (err) {
      res.send(err);
    } else {
    res.json(menu)
  };
  });
});


router.get("/:id", verify, async (req, res) => {
  //var id = req.params.id;
  //const userid = await User.findOne({ _id: id });
  User.findOne(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
});

router.put("/:id", async (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    }
  );
});

router.delete("/:id", async (req, res) => {
  User.remove(
    { _id: req.params.id },
    (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json({message: "successfully deleted user"});
    }
  );
});

module.exports = router;

// export default routes;
