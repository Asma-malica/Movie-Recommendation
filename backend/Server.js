const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Movie = require('./models/Movie');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://asmamalica07:Asma%402004@movie.avbh9ah.mongodb.net/movieDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Signup route
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;

  // Validate request
  if (!username || !password) {
    return res.status(400).send({ success: false, message: 'Username and password are required' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ success: false, message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).send({ success: true });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).send({ success: false, message: 'Error signing up' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(username,password);
  // Validate request
  if (!username || !password) {
    return res.status(400).send({ success: false, message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ success: false, message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send({ success: false, message: 'Incorrect password' });
    }

    res.send({ success: true, user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send({ success: false, message: 'Error logging in' });
  }
});

// Get user movies
app.get('/api/user/:userId/movies', async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate('movies');
    if (!user) {
      return res.status(404).send({ success: false, message: 'User not found' });
    }

    res.send({ success: true, movies: user.movies });
  } catch (error) {
    console.error('Error fetching user movies:', error);
    res.status(500).send({ success: false, message: 'Error fetching user movies' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
