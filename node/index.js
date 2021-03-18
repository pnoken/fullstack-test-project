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
const foodRoute = require("./src/routes/food");


dotenv.config();
const app = express();
const http = require("http").Server(app);
//serving static files
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

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
app.use("/food", foodRoute)

var server = http.listen(3001, () => {
  console.log("Sever is listenting on port", server.address().port);
});
