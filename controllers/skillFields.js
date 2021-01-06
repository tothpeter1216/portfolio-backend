const skillFieldsRouter = require("express").Router();
const { findByIdAndUpdate, findById } = require("../models/skillField");
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

skillFieldsRouter.put("/:id/skills", async (req, res, next) => {
  try {
    const newSkill = {
      skillName: req.body.skillName,
      level: req.body.level,
    };

    const skillField = await SkillField.findById(req.params.id);
    skillField.skill = [...skillField.skill, newSkill];
    const updatedSkillField = await SkillField.findByIdAndUpdate(
      req.params.id,
      skillField,
      {
        new: true,
      }
    );
    res.json(updatedSkillField);
  } catch (error) {
    next(error);
  }
});

skillFieldsRouter.delete("/:id/skills", async (req, res, next) => {
  try {
    const deleteSkillName = req.body.skillName;
    const skillField = await SkillField.findById(req.params.id);
    skillField.skill = skillField.skill.filter((s) => {
      return s.skillName !== deleteSkillName;
    });
    const updatedSkillField = await SkillField.findByIdAndUpdate(
      req.params.id,
      skillField,
      {
        new: true,
      }
    );
    res.json(updatedSkillField);
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
