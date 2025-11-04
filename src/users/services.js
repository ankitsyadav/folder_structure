
const {prisma} = require("../../db/config");

const createUser = async (data) =>{
    const {email,name}=data;
   const existingUser= await prisma.user.findUnique({
        where:{email}
    });
    if(existingUser){
        const err= new Error("User already exits.");
        err.statusCode=409;
        throw err;
    }
   const user= await prisma.user.create({
        data:{
            email,name
        }
    })
    return user;

}
module.exports ={createUser};