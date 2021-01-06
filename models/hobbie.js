const mongoose = require("mongoose");

const hobbieSchema = new mongoose.Schema({
  name: String,
});

hobbieSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Hobbie", hobbieSchema);
