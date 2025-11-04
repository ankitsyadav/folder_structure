
const {createUser} = require("./services");

const create =async (req,res)=>{
    try {
    const data=req.body;
    const datafromService= await createUser(data);
    return res.status(200).json({datafromService});
    } catch (error) {
        return res.status(error.statusCode).json({err:error.message});
    }
}

module.exports = {create}

