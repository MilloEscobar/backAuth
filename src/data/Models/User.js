var mongoose = require('mongoose'),
    encryption = require('../../utilities/cripto');

module.exports.init = function () {
  var userSchema = new mongoose.Schema({
      name: String,
      lastName: String,
      username: { type: String, require: '{PATH} is required', unique: true },
      salt: String,
      hashPass: String,
      roles: [String],
      courses: [{
          stepCurrent:Number,
          questionNumber:Number,
          id: { type: String, require: '{PATH} is required', unique: true },
          name: String,
          stepsTotal: Number,
          steps:[{
              info : String,
              read : String,
              questions:[{
                      step: Number,
                      question: String,
                      answers: [{
                                  number : Number,
                                  answer: String,
                                  correct: Boolean
                              }]
                      }],
              }],
          media: [{
                name: String,
                url: String
              }],
          level: String,
          tags: [
                  String
              ]
      }],
  });
  
  userSchema.method({
      authenticate: function(password) {
          if (encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
              return true;
          }
          else {
              return false;
          }
      }
  });

  var User = mongoose.model('User', userSchema);
};