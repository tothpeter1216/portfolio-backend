const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  name: String,
  description: String,
  technologies: [String],
  gitHub: String,
  photo: String,
  website: String,
});

codeSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Code", codeSchema);
