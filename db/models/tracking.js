const { DataTypes } = require("sequelize");

const sequelize = require("../db.js");

// create "tracking" model
const Tracking = sequelize.define(
  "tracking",
  {
    visitor: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    meet: {
      type: DataTypes.STRING,
    },
    purpose: {
      type: DataTypes.STRING,
    },
    in_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    out_time: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Tracking;
