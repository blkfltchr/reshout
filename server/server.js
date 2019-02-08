const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const meetings = require('./routes/api/meetings')
const reminders = require('./routes/api/reminders')

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('err'));

app.get('/', (req, res) => res.send('Hello world'));

// Use Routes

app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/meetings', meetings)
app.use('/api/reminders', reminders)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))
