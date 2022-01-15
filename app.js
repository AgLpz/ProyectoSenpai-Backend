const express = require("express");
const cors = require("cors");
const path = require('path');


if (process.env.ENV !== "production") {
  require("dotenv").config();
}

const { resolve } = require("path");
const { config } = require("dotenv");
config({ path: resolve(__dirname, "./.env") });


const authRouter = require("./src/routes/auth");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/auth", authRouter);

app.listen(PORT, function () {
  console.log(`Corriendo en el puerto ${PORT}`);
});
