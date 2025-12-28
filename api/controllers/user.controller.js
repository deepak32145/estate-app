import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
export const getAllUsers = async(req , res) =>{
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const getUserById = async(req , res) =>{
    const userId = req.params.id;
    try{
        const user = await prisma.user.findUnique({
            where : {id : userId},
        });
        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err});
    }
}

export const updateUser = async(req, res) =>{
    const id = req.params.id;
    const {password , avatar , ...otherDetails} = req.body;
    let updatedPassword = null;
    if(password){
        updatedPassword = await bcrypt.hash(password , 10);

    }
    try{
        const updatedUser = await prisma.user.update({
            where : {id : id},
            data : {
                ...otherDetails,
                ...(updatedPassword && {password : updatedPassword}),
                ...(avatar && {avatar : avatar})
            }
        });
        const {password : userPassword , ...rest} = updatedUser;
        res.status(200).json(rest);
    }
    catch(err){
        res.status(500).json({error : "Internal Server Error"});
    }   
}

export const deleteUser = async(req , res) =>{
    const id = req.params.id;
    try{
        await prisma.user.delete({
            where : {id}
        });
        res.status(200).json({message : "user deleted successsfuly"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : "failed to delete user"});
    }
}