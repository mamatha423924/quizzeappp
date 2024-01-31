

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const UserdatasModel = require('./models/userdatas');
const QuestionModel = require('./models/question');
const PollModel = require('./models/poll');


const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(cors());


const mongoURI = 'mongodb+srv://admin:praveen123@cluster0.vgibzjr.mongodb.net/quizzeapp?retryWrites=true&w=majority';


mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const userdatas = await UserdatasModel.findOne({ email, password });
      if (userdatas) {
        console.log('User authenticated:', userdatas);
        res.status(200).json({ message: 'Login successful', userdatas });
      } else {
        console.log('Authentication failed: Invalid credentials');
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/', async (req, res) => {
    try {
      console.log('Creating user:', req.body);
      const userDatas = await UserdatasModel.create(req.body);
      console.log('User created:', userDatas);
      res.status(201).json(userDatas);
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/CreateQuestionModal', async (req, res) => {
    try {
      console.log('add questions:', req.body);
      const question = await QuestionModel.create(req.body);
      console.log('update questions:', question);
      res.status(201).json(question);
    } catch (err) {
      console.error('Error add question:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.post('/CreateQuestionModal', async (req, res) => {
    try {
      console.log('add POLL:', req.body);
      const poll = await PollModel.create(req.body);
      console.log('update POLL:', poll);
      res.status(201).json(poll);
    } catch (err) {
      console.error('Error add question:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/questions', async (req, res) => {
    try {
      const question = await QuestionModel.findById(req.params.id);
      if (!question) {
        return res.status(404).json({ error: 'Question not found' });
      }
      res.status(200).json({ question });
    } catch (err) {
      console.error('Error fetching question:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
