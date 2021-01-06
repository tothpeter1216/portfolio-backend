const hobbiesRouter = require("express").Router();
const Hobbie = require("../models/hobbie");

hobbiesRouter.get("/", async (req, res, next) => {
  try {
    const hobbie = await School.find({});
    res.json(hobbie);
  } catch (error) {
    next(error);
  }
});

hobbiesRouter.post("/", async (req, res, next) => {
  try {
    const addedHobbie = new Hobbie({
      name: req.body.name,
    });

    await addedHobbie.save();
    res.json(addedHobbie);
  } catch (error) {
    next(error);
  }
});

hobbiesRouter.put("/:id", async (req, res, next) => {
  try {
    const hobbie = {
      name: req.body.name,
    };

    const updatedHobbie = await Hobbie.findByIdAndUpdate(
      req.params.id,
      hobbie,
      {
        new: true,
      }
    );
    res.json(updatedHobbie.toJSON());
  } catch (error) {
    next(error);
  }
});

hobbiesRouter.delete("/:id", async (req, res, next) => {
  try {
    await Hobbie.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = hobbiesRouter;
