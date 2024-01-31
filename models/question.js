const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({

    quizName: String,
  questions: [
    {
      questionText: String,
      optionType: String,
      textOption1: String,
      textOption2: String,
      timer: String,
    }
  ]

});


const QuestionModel = mongoose.model("Question", questionSchema);

module.exports = QuestionModel;
