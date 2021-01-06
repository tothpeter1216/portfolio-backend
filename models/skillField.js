const mongoose = require("mongoose");

const skillFieldSchema = new mongoose.Schema({
  skillField: String,
  skill: [
    {
      skillName: String,
      level: Number,
    },
  ],
});

skillFieldSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("SkillField", skillFieldSchema);
