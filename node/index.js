const express = require("express");
const bodyParser = require("body-parser");
//const io = require("socket.io")(http);
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./src/routes/users")
//const bcrypt = require('bcrypt')
 const authRoute = require("./src/routes/auth");
 const adminRoute = require("./src/routes/admin");
const userRoute = require("./src/routes/users");


dotenv.config();
const app = express();
const http = require("http").Server(app);
//serving static files
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

//epsagon

// const epsagon = require('epsagon');

// epsagon.init({
//   token: '1d89dcc4-66c8-444a-a130-9226ed93a767',
//   appName: 'test=project',
//   metadataOnly: false, // Optional, send more trace data
// });

// const main = epsagon.nodeWrapper(() => {
//   return 'Hello World!';
// });

// main();



//routes(app);

// mongoose.Promise = global.Promise;

// var User = mongoose.model("Message", {
//   first_name: String,
//   last_name: String,
//   username: String,
//   password: String,
//   age: Number,
// });

// app.get("/users", (req, res) => {
//   User.find({}, (err, users) => {
//     res.send(users);
//   });
// });

// // app.post("/users/add", (req, res) => {
// //   const user = new User(req.body);
// //   res.sendStatus(200)
// //       user.save((err) => {
// //       if (err){ sendStatus(500)}
// //     })
// // });

// app.get("/users/:user", (req, res) => {
//   var user = req.params.user;
//   User.find({ username: user }, (err, users) => {
//     res.send(users);
//   });
// });

// app.delete("/users/:user", (req, res) => {
//   var user = req.params.user;
//   User.remove({ _id: user }, (err, users) => {
//     res.send("Delete Request Successful");
//   });
// });

// app.put("/users/:user", (req, res) => {
//   var user = req.params.user;
//   User.findOneAndUpdate({ _id: user }, (err, users) => {
//     res.send("Delete Request Successful");
//   });
// });


// app.post("/users/signup", (req, res) => {
//     //const salt = await bcypt.genSalt()
//     //const hashedPw = await bcrypt.hash(req.body.password, salt)
//     const user = new User(req.body);
//     //io.emit("user", req.body)
//     res.sendStatus(200)

//     user.save((err) => {
//       if (err){ sendStatus(500)}
//     })

// });

// app.post('/users/login', async (req, res) => {
//   //const users = new User()
//   const user = User.find(user => user.username = req.body.username)
//   if (user == null) {
//     return res.status(400).send('Cannot find User')
//   }
//   try {
//     res.send('Success')
//   } catch {
//     res.status(500).send()
//   }
// })

// io.on("connection", (socket) => {
//   console.log("a user connected");
// });

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("mongo db connection", err);
  }
);

app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/user", userRoute);

var server = http.listen(3001, () => {
  console.log("Sever is listenting on port", server.address().port);
});
