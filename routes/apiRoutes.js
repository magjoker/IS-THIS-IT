// good morning variables

const fs = require('fs');
const path = require('path');
const notesData = require('../db/db.json');
const express = require("express");
const router = express.Router();

let notes = notesData;

//this function uses fs, path and the JSON.stringify() method to add notes to the database
const saveDB = () => {
    fs.writeFileSync(
        path.resolve(__dirname, "../db/db.json"), JSON.stringify(notes)
    );
};

//this function uses a spread operator to map through the database array and give each object an ID.

router.get('/notes', (req, res) => {
        notes = notes.map((notes, index) => ({
            ...notes,
            id: index + 1,
        }));
        
        console.log(notes);
        res.json(notes);
    });

//this function posts notes to the database with the help of the saveDB function.

router.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    saveDB(notes);
    res.json(notes);
});

//this last function uses the splice method to delete an object from the database by its ID.

router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    notes.splice(req.params.id, 1);
    res.json(notes);
});


module.exports = router;