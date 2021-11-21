const express = require("express");
const cors = require("cors");

const authRouter = require("./src/routes/auth");

const { router: tareasRouter } = require("./src/routes/tarea");

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
app.use("/tareas", tareasRouter);

app.listen(PORT, function () {
  console.log(`Corriendo en el puerto ${PORT}`);
});
