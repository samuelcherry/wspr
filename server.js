const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const prisma = require("./prisma");
const loginRoute = require("./api/login");

const app = express();
const PORT = 3000;
const SECRET_KEY = "secret";

app.use(cors());
app.use(express.json());
app.use(require("morgan")("dev"));
app.use(bodyParser.json());
app.use("/api", require("./api"));

app.use("/api/login", loginRoute);

app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status ?? 500;
  const message = err.message ?? "Internal server error";
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
