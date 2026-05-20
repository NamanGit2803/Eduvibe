import connectDb from "@/middleware/mongoose"
import Users from '@/models/Users'
import jwt from 'jsonwebtoken'


const handler = async (req, res) => {
    let users = await Users.find()
    if(users){
    res.status(200).json({success: true, users})
    }else{
        res.status(200).json({success: 'success', msg: 'data not found'})
    }
}


export default connectDb(handler);