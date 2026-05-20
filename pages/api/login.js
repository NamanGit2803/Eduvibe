import connectDb from "@/middleware/mongoose"
import Users from '@/models/Users'
import jwt from 'jsonwebtoken'


const handler = async (req, res) => {
    let user = await Users.findOne({ email: req.body.data.email })

    if (req.body.data.msg == 'login') {
        if (!user) {
            if (req.body.data.email == 'njain4282@gmail.com' && req.body.data.password == 'admin283') {
                let token = jwt.sign({ email: req.body.data.email, userType: 'admin' }, process.env.JWT_SECRET, { expiresIn: "7d" })
                res.status(200).json({ success: true, token, userType: 'admin' })
            } else {
                res.status(200).json({ msg: 'User not exist' })
            }
        } else {
            if (user.password == req.body.data.password) {
                let token = jwt.sign({ email: req.body.data.email, userType: 'user' }, process.env.JWT_SECRET, { expiresIn: "7d" })
                res.status(200).json({ success: true, token, userType: 'user' })
            } else {
                res.status(200).json({ msg: 'Invalid credintial' })
            }
        }
    } else {
        if (!user) {
            try {
                let u = new Users({ email: req.body.data.email, password: req.body.data.password,name: req.body.data.name })
                await u.save()
                let token = jwt.sign({ email: req.body.data.email, userType: 'user' }, process.env.JWT_SECRET, { expiresIn: "7d" })
                res.status(200).json({ success: true, token, userType: 'user' });
            } catch (error) {
                res.status(500).json({ error: error });
            }
        } else {
            res.status(200).json({ msg: 'User already exist' })
        }
    }

}



export default connectDb(handler);
