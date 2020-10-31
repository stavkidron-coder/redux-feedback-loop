const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST feedback to DB
router.post('/', (req, res) => {
    const newFeedback = req.body;
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments)
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments)
    .then((result) => {
        console.log('Added feedback to DB!', newFeedback);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR in POST', error);
        res.sendStatus(500);
    });
});




module.exports = router;