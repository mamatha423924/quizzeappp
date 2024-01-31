const mongoose = require('mongoose');


const userdatasSchema = new mongoose.Schema({
   
    name: String,
    email: String, 
    password: String,
});


const UserdatasModel = mongoose.model("Userdatas", userdatasSchema);

module.exports = UserdatasModel;
