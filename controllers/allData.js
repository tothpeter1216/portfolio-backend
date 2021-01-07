const allRouter = require("express").Router();
const School = require("../models/school");
const Code = require("../models/code");
const Hobbie = require("../models/hobbie");
const SkillField = require("../models/skillField");

allRouter.get("/", async (req, res, next) => {
  try {
    const schools = await School.find({});
    const code = await Code.find({});
    const hobbie = await Hobbie.find({});
    const skillField = await SkillField.find({});
    const data = {
      schools,
      code,
      hobbie,
      skillField,
    };
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = allRouter;
