const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST feedback to DB
router.post('/', (req, res) => {
    console.log(req.body);
    
    const newFeedback = req.body;
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments)
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((result) => {
        console.log('Added feedback to DB!', newFeedback);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('ERROR in POST', error);
        res.sendStatus(500);
    });
});

//GET feedback from DB
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM feedback ORDER BY date;`;
    pool.query(queryText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})




module.exports = router;