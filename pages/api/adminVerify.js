import connectDb from "@/middleware/mongoose"
import Users from '@/models/Users'
import jwt from 'jsonwebtoken'


const handler = async (req, res) => {
    let decode = jwt.verify(req.body.data.token, process.env.JWT_SECRET)
    if (decode.userType != 'admin') {
        res.status(200).json({ error: 'invalid' })
    } else {
        res.status(200).json({ success: 'success' })
    }
}


export default connectDb(handler);
