const express = require("express");
const app = express();
require("dotenv").config();
const School = require("./models/school");
const bodyParser = require("body-parser");

// const cors = require("cors");

// app.use(cors());

app.use(bodyParser.json());

app.use(express.static("build"));

app.get("/", (req, res) => {
  res.send("HIII");
});

app.get("/schools", async (req, res) => {
  const schools = await School.find({});
  res.json(schools);
});

app.post("/schools", async (req, res) => {
  const addedSchool = new School({
    name: req.body.name,
    link: req.body.link,
    description: req.body.description,
  });

  await addedSchool.save();
  res.json(addedSchool);
});

app.listen(process.env.PORT, () => {
  console.log("The server is runing on " + process.env.PORT);
});
