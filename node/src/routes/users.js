const { addNewUser, getUsers } = require("../controllers/userController");
const router = require('express').Router();

const users = () => {
    router.get('/list', (req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getUsers)

    router.post("/add", addNewUser);

    router.put("/:username", (req, res) => {
      res.send("PUT request successful");
    })

    router.delete("/:username", (req, res) => {
      res.send("DELETE request successful");
    });
};

module.exports = users;
