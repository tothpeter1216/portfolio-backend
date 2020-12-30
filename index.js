const app = require("express")();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("HIII");
});

app.listen(PORT, () => {
  console.log("The server is runing on " + PORT);
});
