const { sequelize, Sequelize } = require("./index.js");

// create Tracking table
sequelize.define(
  "Tracking",
  {
    visitor: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    meet: {
      type: Sequelize.STRING,
    },
    purpose: {
      type: Sequelize.STRING,
    },
    in_time: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    out_time: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);

sequelize.sync().then(() => {
  console.log("Migration complete!");
  sequelize.close();
});
