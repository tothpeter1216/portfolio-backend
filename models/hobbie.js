const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: String,
  link: String,
  description: String,
});

schoolSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("School", schoolSchema);
