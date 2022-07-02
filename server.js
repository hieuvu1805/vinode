const app = require("./app.js");

const port = 4000;

app.set("port", port);

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`);
});
