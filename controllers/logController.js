let express = require('express');
let router = express.Router();
const validate = require('../middleware/validateSession');
const log = require("../models/log")

// router.get('/log', function(req,res){
//     res.send('Log a post.');
// });

router.post('/log', (req, res) => {
    log.create({
        description: req.body.description,
        definition: req.body.definition,
        result: req.body.result,
        owner_id: req.body.id
    })
    .then(log => res.status(200).json({log}))
    .catch(err => res.status(500).json({ message: 'Log Creation Failed!', error: err }));
})

router.get('/log', (req, res) => {
    log.findAll(id)
    .then(log => res.status(200).json({ message: `Found ${log.length} log entries.`, count: log.length, log}))
    .catch(err => res.status(500).json({message: 'error', err}))
});

router.get('/log/:id', (req, res) => {
    log.findById(id)
    .then(log => res.status(200).json({ message: `Found ${log.length} log entries.`, 
    count: log.length, log}))
    .catch(err => res.status(500).json({message: 'error', err}));
});

router.put('/log/:id', validate, (req, res) => {
    log.update(req.body, { where: { id: req.params.id }})
    .then(updated => res.status(200).json({message: `Success: ${req.params.id} updated.`, updated}))
    .catch(err => res.status(500).json({message: 'Log entry not updated!', err}));
});

router.delete('/trash/deletedLog/:id', validate, (req, res) => {
    PirateMime.destroy({ where: { id: req.params.id } })
    .then(deletedLog => res.status(200).json({message: `Log entry ${req.params.id} has been deleted.`, updated}))
    .catch(err => res.status(500).json({ message: 'Failure!', error: err}))
});

module.exports = router;
