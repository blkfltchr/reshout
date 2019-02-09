const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

// Load user model
const User = require('../../models/User')

// ROUTE:   GET api/users/test
// DESC:    Tests users route
// ACCESS:  Public
router.get('/test', (req, res) => res.json({msg: 'Users works'}));

// ROUTE:   POST api/users/register
// DESC:    Register User
// ACCESS:  Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(user) {
        return res.status(400).json({email: 'Email already exists'})
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200', // Size
          r: 'pg', // Rating
          d: 'mm' // Default
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          avatar
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})

// ROUTE:   GET api/users/login
// DESC:    Login User / Return JWT Token
// ACCESS:  Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({email})
    .then(user => {
      // Check for user
      if(!user) {
        return res.status(404).json({email: 'You have entered an invalid email or password.'});
      }

      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {
            res.json({msg: 'Success'})
          } else {
            return res.status(400).json({password: 'You have entered an invalid email or password.'});
          }
        })
    })
})

module.exports = router;