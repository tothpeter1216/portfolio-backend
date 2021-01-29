const skillFieldsRouter = require("express").Router();
const SkillField = require("../models/skillField");
const auth = require("../utils/auth");

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
    const token = auth.getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

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
    const token = auth.getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

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
    const token = auth.getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

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

skillFieldsRouter.delete("/:id", async (req, res, next) => {
  try {
    const token = auth.getTokenFrom(req);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    await SkillField.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = skillFieldsRouter;
