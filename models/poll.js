const mongoose = require('mongoose');


const pollSchema = new mongoose.Schema({

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


const PollModel = mongoose.model("Poll", pollSchema);

module.exports = PollModel;
