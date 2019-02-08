const express = require('express');
const router = express.Router();

// ROUTE:   GET api/users/test
// DESC:    Tests users route
// ACCESS:  Public
router.get('/test', (req, res) => res.json({msg: 'Users works'}));

module.exports = router;