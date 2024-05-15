import user from "../models/user.js"
import jwt from "jsonwebtoken"
import bcrypy from "bcrypt"

export const singup = async(req,res) => {
    let check = await user.findOne({email:req.body.email})
    let saltRound = 10
   const hash = await bcrypy.hash(req.body.password,saltRound)    

    if(check){
        return res.status(400).json({success:false ,errors:"existing user found with same email address"})
    }
    let cart = {}
    for(let i=0;i< 300;i++){
        cart[i] = 0
    }
    const users = new user({
        name:req.body.name,
        email:req.body.email,
        password:hash,
        cartData:cart
    })
    await users.save()

    const data = {
        user:{
            id:users.id
        }
    }
    const token = jwt.sign(data,"secretcode")
    res.json({success:true,token})

}

export const login = async (req,res) => {
   try {
    const foundUser = await user.findOne({email:req.body.email})
    if(!foundUser){
        res.status(400).json({sucess:false,error:"User not found"})
    }
    const math = await bcrypy.compare(req.body.password,foundUser.password)
    if(!math)res.status(400).json({success:false,error:"Invalid Password"})
        else{
            const data = {
                user:{
                    id:foundUser.id
                }
            }
            const token = jwt.sign(data,"secretcode");
            res.json({success:true,token})
        }
   } catch (error) {
    res.status(500).json(error)
   }
} 