var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    id: { type: String, require: '{PATH} is required', unique: true },
    name: String,
    stepsTotal: Number,
    steps:[{
        info : String,
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
});

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;


// {
//     "id": "3",
//     "name": "Course Name 3",
//     "stepsTotal": 2,
//     "steps":[{
//         "info" : "<p>Aenean posuere metus eget sapien finibus sollicitudin. Nullam mattis feugiat quam id ultrices. In porttitor suscipit orci a convallis. Sed eu eros magna. Quisque feugiat vel risus in pretium. Pellentesque ut risus magna. Suspendisse sit amet orci at nunc suscipit dignissim. Suspendisse potenti. Suspendisse ultricies felis et dapibus aliquet. Nulla facilisi. Vivamus venenatis mattis lacinia. Nulla lectus urna, eleifend et bibendum eget, elementum quis nisl. Morbi mattis vestibulum ipsum vel lacinia. Quisque eget tortor eget lacus mollis accumsan. Donec mi metus, vehicula volutpat quam consectetur, euismod congue leo. </p><p>Maecenas maximus cursus eleifend. Integer blandit massa non purus accumsan tempus. In ante diam, lacinia eu volutpat vitae, scelerisque vitae erat. Nulla at maximus erat. Quisque at elit quis quam ullamcorper sodales quis sit amet mi. Morbi mollis tempor nisl vel lobortis. Fusce tellus mauris, tristique eu justo id, viverra interdum nunc. Vivamus faucibus augue ac scelerisque tristique. Vestibulum sit amet ligula vel risus pretium consequat. Mauris nec lorem pulvinar, ultricies sapien a, ullamcorper quam. Praesent in tellus et nunc facilisis venenatis id ac urna. </p><p>Nulla porta bibendum eros sit amet imperdiet. Pellentesque sollicitudin arcu enim. Nullam eu blandit enim. Vestibulum in mi at lacus dictum ultrices vel nec augue. Pellentesque tempor lacus tellus, a mollis magna consequat sed. Nunc fringilla vel erat nec pulvinar. Sed sit amet lobortis diam. Cras odio lectus, tincidunt porttitor nunc sed, lobortis ultrices ipsum. Nunc vulputate est in erat molestie feugiat quis eu tellus. Duis elementum mattis purus non imperdiet. Curabitur viverra, mauris vel feugiat blandit, lorem urna posuere felis, ut imperdiet lectus nisi non ex.</p>",
//             "questions":[{
//             "step": 1,
//             "question": "This is a question?",
//             "answers": [{
//                 "number" : 1,
//                 "answer": "bad answer",
//                 "correct": false
//             },
//             {
//                 "number" : 2,
//                 "answer": "bad answer",
//                 "correct": false
//             },
//             {
//                 "number" : 3,
//                 "answer": "good answer",
//                 "correct": true
//             }]
//         },
//         {
//             "step": 1,
//             "question": "This is a question 2?",
//             "answers": [{
//                 "number" : 1,
//                 "answer": "bad answer",
//                 "correct": false
//             },
//             {
//                 "number" : 2,
//                 "answer": "bad answer",
//                 "correct": false
//             },
//             {
//                 "number" : 3,
//                 "answer": "good answer",
//                 "correct": true
//             }]
//         }]
//     },{
//         "info" : "<p>Aenean posuere metus eget sapien finibus sollicitudin. Nullam mattis feugiat quam id ultrices. In porttitor suscipit orci a convallis. Sed eu eros magna. Quisque feugiat vel risus in pretium. Pellentesque ut risus magna. Suspendisse sit amet orci at nunc suscipit dignissim. Suspendisse potenti. Suspendisse ultricies felis et dapibus aliquet. Nulla facilisi. Vivamus venenatis mattis lacinia. Nulla lectus urna, eleifend et bibendum eget, elementum quis nisl. Morbi mattis vestibulum ipsum vel lacinia. Quisque eget tortor eget lacus mollis accumsan. Donec mi metus, vehicula volutpat quam consectetur, euismod congue leo. </p><p>Maecenas maximus cursus eleifend. Integer blandit massa non purus accumsan tempus. In ante diam, lacinia eu volutpat vitae, scelerisque vitae erat. Nulla at maximus erat. Quisque at elit quis quam ullamcorper sodales quis sit amet mi. Morbi mollis tempor nisl vel lobortis. Fusce tellus mauris, tristique eu justo id, viverra interdum nunc. Vivamus faucibus augue ac scelerisque tristique. Vestibulum sit amet ligula vel risus pretium consequat. Mauris nec lorem pulvinar, ultricies sapien a, ullamcorper quam. Praesent in tellus et nunc facilisis venenatis id ac urna. </p><p>Nulla porta bibendum eros sit amet imperdiet. Pellentesque sollicitudin arcu enim. Nullam eu blandit enim. Vestibulum in mi at lacus dictum ultrices vel nec augue. Pellentesque tempor lacus tellus, a mollis magna consequat sed. Nunc fringilla vel erat nec pulvinar. Sed sit amet lobortis diam. Cras odio lectus, tincidunt porttitor nunc sed, lobortis ultrices ipsum. Nunc vulputate est in erat molestie feugiat quis eu tellus. Duis elementum mattis purus non imperdiet. Curabitur viverra, mauris vel feugiat blandit, lorem urna posuere felis, ut imperdiet lectus nisi non ex.</p>",
//             "questions":[{
//             "step": 1,
//             "question": "This is a question?",
//             "answers": [{
//                 "number" : 1,
//                 "answer": "bad answer",
//                 "correct": false
//             },
//             {
//                 "number" : 2,
//                 "answer": "bad answer",
//                 "correct": false
//             },
//             {
//                 "number" : 3,
//                 "answer": "good answer",
//                 "correct": true
//             }]
//         },
//         {
//             "step": 1,
//             "question": "This is a question 2?",
//             "answers": [{
//                 "number" : 1,
//                 "answer": "bad answer",
//                 "correct": false
//             },
//             {
//                 "number" : 2,
//                 "answer": "bad answer",
//                 "correct": false
//             },
//             {
//                 "number" : 3,
//                 "answer": "good answer",
//                 "correct": true
//             }]
//         }]
//     }],
//     "media": [{
//         "name": "image",
//         "url": "https://thenypost.files.wordpress.com/2017/05/shutterstock_115473676.jpg?quality=90&strip=all&strip=all"
//     }],
//     "document":"",
//     "level": "advanced",
//     "tags": ["js","programing"]
// }