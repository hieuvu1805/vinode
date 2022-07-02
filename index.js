import "dotenv/config";
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// test connection
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
  sequelize.close();
}

// create Tracking table
sequelize.define(
  "Tracking",
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
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

await sequelize.sync();

sequelize.close();
