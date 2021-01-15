const app = require("./app");
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

app.listen(config.PORT, () => {
  logger.info("The server is runing on " + config.PORT);
});
