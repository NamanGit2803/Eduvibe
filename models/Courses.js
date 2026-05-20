 const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    videoUrl: {type: String, required: true},
    branch: {type: String, required: true},
    semester: {type: String, required: true},
    imgUrl:{type: String, required: true},
    notesLink: {type: String, required: true}
        
}, {timestamps:true});

mongoose.models = {}
export default mongoose.model("Course", CourseSchema);