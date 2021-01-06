const app = require("./app"); // varsinainen Express-sovellus
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);

app.listen(process.env.PORT, () => {
  logger.info("The server is runing on " + config.PORT);
});
