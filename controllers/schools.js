const schoolsRouter = require("express").Router();
const School = require("../models/school");

schoolsRouter.get("/", (req, res) => {
  res.send("HIII");
});

schoolsRouter.get("/schools", async (req, res, next) => {
  try {
    const schools = await School.find({});
    res.json(schools);
  } catch (error) {
    next(error);
  }
});

schoolsRouter.post("/schools", async (req, res, next) => {
  try {
    const addedSchool = new School({
      name: req.body.name,
      link: req.body.link,
      description: req.body.description,
    });

    await addedSchool.save();
    res.json(addedSchool);
  } catch (error) {
    next(error);
  }
});

module.exports = schoolsRouter;
