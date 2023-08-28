// express must be used everywhere in order to access use all request if needed
const express = require('express');
const router = express.Router();


// Making a GET request
router.get('/', (req, res) => {
    res.json({ mssg: "Get your all data workouts" });
});

// Making a single GET request using ID
router.get('/:id', (req, res) => {
    res.json({ mssg: "Get your single data" });
});

// Making a POST request
router.post('/', (req, res) => {
    res.json({ mssg: "Post your data" });
});

// Making a DELETE request
router.delete('/:id', (req, res) => {
    res.json({ mssg: "Delete your data" });
});

// Making a PUT request
router.patch('/:id', (req, res) => {
    res.json({ mssg: "Put your data" }); 
});

module.exports = router;