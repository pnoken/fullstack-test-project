const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/User");
const { addNewUser, getUsers } = require("../controllers/userController");

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