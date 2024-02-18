const router = require('express').Router();
// v4 uuid is grabbed through installing "npm i uuid".
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');


// GET request for api route "/api/notes"
router.get('/api/notes', async (req, res) => {
    const DB_json = await JSON.parse(fs.readFileSync("db/db.json",))
    res.json(DB_json);
});


// POST request for api route "/api/notes"
router.post('/api/notes', (req, res) => {
const DB_json = JSON.parse(fs.readFileSync("db/db.json"));
const newInput = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
};
DB_json.push(newInput); 
fs.writeFileSync("db/db.json", JSON.stringify(DB_json));
res.json(DB_json);
});

module.exports = router;