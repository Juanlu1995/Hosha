const express = require('express');
const router = express.Router();

// routes import
const userRoutes = require(__dirname+'/user');

// routes
router.get("/", function(req, res) {
    res.send("hola");
}).use("/user", userRoutes);

module.exports = router;