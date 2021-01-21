const codesRouter = require("express").Router();
const Code = require("../models/code");

codesRouter.get("/", async (req, res, next) => {
  try {
    const codes = await Code.find({});
    res.json(codes);
  } catch (error) {
    next(error);
  }
});

codesRouter.post("/", async (req, res, next) => {
  try {
    const addedCode = new Code({
      name: req.body.name,
      description: req.body.description,
      gitHub: req.body.gitHub,
      gitHub2: req.body.gitHub2,
      websiteLinkText: req.body.websiteLinkText,
      website: req.body.website,
    });

    await addedCode.save();
    res.json(addedCode);
  } catch (error) {
    next(error);
  }
});

codesRouter.get("/:id", async (req, res, next) => {
  try {
    const code = await Code.findById(req.params.id);
    res.json(code);
  } catch (error) {
    next(error);
  }
});

codesRouter.put("/:id", async (req, res, next) => {
  try {
    const code = {
      name: req.body.name,
      description: req.body.description,
      gitHub: req.body.gitHub,
      gitHub2: req.body.gitHub2,
      websiteLinkText: req.body.websiteLinkText,
      website: req.body.website,
    };

    const updatedCode = await Code.findByIdAndUpdate(req.params.id, code, {
      new: true,
    });
    res.json(updatedCode.toJSON());
  } catch (error) {
    next(error);
  }
});

codesRouter.delete("/:id", async (req, res, next) => {
  try {
    await Code.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

codesRouter.put("/:id/technology", async (req, res, next) => {
  try {
    const code = await Code.findById(req.params.id);
    code.technologies = [...code.technologies, req.body.technology];
    await Code.findByIdAndUpdate(req.params.id, code);
    res.json(code);
  } catch (error) {
    next(error);
  }
});

codesRouter.delete("/:id/technology", async (req, res, next) => {
  try {
    const removableTech = req.body.technology;
    const code = await Code.findById(req.params.id);
    code.technologies = code.technologies.filter((tech) => {
      return tech !== removableTech;
    });
    await Code.findByIdAndUpdate(req.params.id, code);
    res.json(code);
  } catch (error) {
    next(error);
  }
});

module.exports = codesRouter;
