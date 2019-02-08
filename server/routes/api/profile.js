const express = require('express');
const router = express.Router();

// ROUTE:   GET api/profile/test
// DESC:    Tests profile route
// ACCESS:  Public
router.get('/test', (req, res) => res.json({msg: 'Profile works'}));

module.exports = router;