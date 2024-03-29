const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

const app = express();
const port = 3000;
const cors = require("cors");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose
  .connect(
    "mongodb+srv://maruthikj4:triveniks@cluster0.nhdaufp.mongodb.net/"
  ) 
  .then(() => {
    console.log("Connected to MongoDb").catch((error) => {
      console.log("Error connection to Mongodb");
    });
  });

app.listen("server is running on the port 3000");
