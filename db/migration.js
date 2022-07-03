const sequelize = require("./db.js");

// require all models
const normalizedPath = require("path").join(__dirname, "models");
require("fs")
  .readdirSync(normalizedPath)
  .forEach(function (file) {
    require("./models/" + file);
  });

// run migration
sequelize
  .sync()
  .then(() => {
    console.log("Migration complete!");
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    sequelize.close();
  });
