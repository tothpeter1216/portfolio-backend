const app = require("express")();
require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const schoolSchema = new mongoose.Schema({
  name: String,
  link: String,
  description: String,
});

const School = mongoose.model("School", schoolSchema);

const school1 = new School({
  name: "gf",
  link: "www.ize",
  description: "cooltour",
});

school1.save().then((result) => {
  console.log("school saved!");
  mongoose.connection.close();
});

app.get("/", (req, res) => {
  res.send("HIII");
});

app.listen(process.env.PORT, () => {
  console.log("The server is runing on " + process.env.PORT);
});
