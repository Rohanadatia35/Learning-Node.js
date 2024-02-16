const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/munira");

const dataSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const dataModel = mongoose.model("dataModel", dataSchema);

app.post("/require", async (req, res) => {
  const data = new dataModel({
    name: req.body.name,
    password: req.body.password
  })
  const result = await data.save();
  res.sendFile(path.join(__dirname, "/success.html"));
});

app.listen(3000);
