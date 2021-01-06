const skillFieldsRouter = require("express").Router();
const SkillField = require("../models/skillField");

skillFieldsRouter.get("/", async (req, res, next) => {
  try {
    const skillFields = await SkillField.find({});
    res.json(skillFields);
  } catch (error) {
    next(error);
  }
});

skillFieldsRouter.post("/", async (req, res, next) => {
  try {
    const addedSkillFields = new SkillField({
      skillField: req.body.skillField,
      skill: [],
    });

    await addedSkillFields.save();
    res.json(addedSkillFields);
  } catch (error) {
    next(error);
  }
});

// skillFieldsRouter.put("/:id", async (req, res, next) => {
//   try {
//     const skillField = {
//       name: req.body.name,
//       link: req.body.link,
//       description: req.body.description,
//     };

//     const updatedSkillFields = await SkillField.findByIdAndUpdate(
//       req.params.id,
//       skillField,
//       {
//         new: true,
//       }
//     );
//     res.json(updatedSkillFields.toJSON());
//   } catch (error) {
//     next(error);
//   }
// });

skillFieldsRouter.delete("/:id", async (req, res, next) => {
  try {
    await SkillField.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = skillFieldsRouter;
