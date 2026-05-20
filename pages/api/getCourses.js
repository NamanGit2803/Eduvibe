import connectDb from "@/middleware/mongoose"
import Courses from '@/models/Courses'

// videoLink,branch,sem,imgUrl,notesLink
const handler = async (req, res) => {
    let course = await Courses.find()
    
    res.status(200).json({success: true, course})
  
}


export default connectDb(handler);