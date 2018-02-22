var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    id: { type: String, require: '{PATH} is required', unique: true },
    name: String,
    steps: Number,
    questions:[{
    	step: Number,
    	question: String,
    	answers: [{
    		number : Number,
    		answer: String,
    		correct: Boolean
    	}]
    }],
    media: [{
    	name: String,
    	url: String
    }],
    level: String,
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;
