const router = require("express").Router();
module.exports = router;
const prisma = require("../prisma");

router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
router.use("/comments", require("./comments"));
