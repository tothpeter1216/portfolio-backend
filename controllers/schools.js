const schoolsRouter = require("express").Router();
const School = require("../models/school");

schoolsRouter.get("/", async (req, res, next) => {
  try {
    const schools = await School.find({});
    res.json(schools);
  } catch (error) {
    next(error);
  }
});

schoolsRouter.post("/", async (req, res, next) => {
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

schoolsRouter.put("/:id", async (req, res, next) => {
  try {
    const school = {
      name: req.body.name,
      link: req.body.link,
      description: req.body.description,
    };

    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      school,
      {
        new: true,
      }
    );
    res.json(updatedSchool.toJSON());
  } catch (error) {
    next(error);
  }
});

schoolsRouter.delete("/:id", async (req, res, next) => {
  try {
    await School.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = schoolsRouter;
