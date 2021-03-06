const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const allRouter = require("./controllers/allData");
const schoolsRouter = require("./controllers/schools");
const hobbiesRouter = require("./controllers/hobbies");
const skillFieldsRouter = require("./controllers/skillFields");
const codesRouter = require("./controllers/codes");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");

const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

logger.info("connecting to", config.MONGODB_URI);
(async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    logger.info("connected to MongoDB");
  } catch (error) {
    logger.error("error connecting to MongoDB:", error.message);
  }
})();

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/all", allRouter);
app.use("/api/schools", schoolsRouter);
app.use("/api/hobbies", hobbiesRouter);
app.use("/api/skillFields", skillFieldsRouter);
app.use("/api/codes", codesRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
