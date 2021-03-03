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
  jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
    const menu = new Menu({
      id: user._id,
      user: user,
      monday: req.body.monday,
      tuesday: req.body.tuesday,
      wednesday: req.body.wednesday,
      thursday: req.body.thursday,
      friday: req.body.friday
    });
    const savedMenu = await menu.save();
    if(err){
      res.sendStatus(403);
    } else {
      try {
        res.json(savedMenu);
      } catch (err) {
        res.status(400).send(err);
      }
    }
  }) 
});

//Get all meals selected by users
router.get("/food", async (req, res) => {
  //const admin = await User.findOne({ role: "admin" });
  await Menu.find({}, (err, menu) => {
    if (err) {
      res.send(err);
    } else {
    res.json(menu)
  };
  });
});

//Get List of Meals Available for a user
router.get("/food/:id", async (req, res) => {
  await Menu.findOne({id: req.params.id}, (err, menu) => {
    if (err) {
      res.send(err);
    } else {
    res.json(menu)
  };
  });
});

router.delete("/food/:id", async (req, res) => {
  Menu.remove(
    { id: req.params.id },
    (err, menu) => {
      if (err) {
        res.send(err);
      }
      res.json({message: "successfully deleted menu"});
    }
  );
});

router.put("/food/:id", async (req, res) => {
  Menu.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, food) => {
      if (err) {
        res.send(err);
      }
      res.json(food);
    }
  );
});


//Get Profile Details
router.get("/profile", verify,  async (req, res) => {
  //const admin = await User.findOne({ role: "admin" });
  const token = req.header('auth-token');
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if(err){
      res.sendStatus(403);
    } else {
      try {
        res.json(user);
      } catch (err) {
        res.status(400).send(err);
      }
    }
  }) 
})


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
