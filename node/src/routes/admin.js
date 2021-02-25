const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/User");
const Food = require("../models/Food");
const { addNewUser, getUsers } = require("../controllers/userController");

router.get("/users", async (req, res) => {
  const admin = await User.findOne({ role: "admin" });
    User.find({}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
  
})

router.post("/food", async (req, res) => {
    //const admin = await User.findOne({ role: "admin" });
    const food = new Food({
        day: req.body.day,
        food: req.body.food
      });
      try {
        const savedFood = await food.save();
        res.send(savedFood);
      } catch (err) {
        res.status(400).send(err);
      }
  })

  router.get("/food", async (req, res) => {
    //const admin = await User.findOne({ role: "admin" });
      Food.find({}, (err, food) => {
          if (err) {
              res.send(err);
          }
          res.json(food);
      })
    
  })

  router.put("/food/:id", async (req, res) => {
    Food.findOneAndUpdate(
      { _id: req.params.id },
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

  router.delete("/food/:id", async (req, res) => {
    Food.remove(
      { _id: req.params.id },
      (err, food) => {
        if (err) {
          res.send(err);
        }
        res.json({message: "successfully deleted food"});
      }
    );
  });

module.exports = router;
