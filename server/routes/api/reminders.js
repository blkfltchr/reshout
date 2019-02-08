const express = require('express');
const router = express.Router();

// ROUTE:   GET api/reminders/test
// DESC:    Tests reminders route
// ACCESS:  Public
router.get('/test', (req, res) => res.json({msg: 'Reminders works'}));

module.exports = router;