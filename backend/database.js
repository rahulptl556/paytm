const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/paytm');

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
    },
    lastName : {
        type: String,
        required : true,
    },
    username : {
        type: String,
        required : true,
    },
    password : {
        type: String,
        required : true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User,
}


