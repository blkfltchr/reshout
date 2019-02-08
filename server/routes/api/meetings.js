const express = require('express');
const router = express.Router();

// ROUTE:   GET api/meetings/test
// DESC:    Tests meetings route
// ACCESS:  Public
router.get('/test', (req, res) => res.json({msg: 'Meetings works'}));

module.exports = router;