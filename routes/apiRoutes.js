const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');
const express = require("express");
const router = express.Router();

// pick up 30m

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    console.log(req.body);
})

module.exports = router;