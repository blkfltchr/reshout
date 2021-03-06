const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Post = require('../../models/Post')

// Validation
const validatePostInput = require('../../validation/post')

// ROUTE:   GET api/posts/test
// DESC:    Tests posts route
// ACCESS:  Public
router.get('/test', (req, res) => res.json({msg: 'Posts works'}));

// ROUTE:   GET api/posts
// DESC:    Get all posts
// ACCESS:  Public
router.get('/', (req, res) => {
  Post.find()
  .sort({date: -1})
  .then(posts => res.json(posts))
  .catch(err => res.status(404))
});

// ROUTE:   POST api/posts
// DESC:    Create post
// ACCESS:  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  })

  newPost.save()
  .then(post => res.json(post));
});

module.exports = router;