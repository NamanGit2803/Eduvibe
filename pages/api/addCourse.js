import connectDb from "@/middleware/mongoose"
import Courses from '@/models/Courses'

// videoLink,branch,sem,imgUrl,notesLink
const handler = async (req, res) => {
    try {
        console.log(req.body.data)
        let u = new Courses({ name: req.body.data.name, videoUrl: req.body.data.videoLink, branch: req.body.data.branch, semester: req.body.data.sem, imgUrl: req.body.data.imgUrl, notesLink: req.body.data.notesLink })
        await u.save()
        
        res.status(200).json({success: 'true'})
    } catch (error) {
        res.status(200).json({error:error})
    }
}


export default connectDb(handler);