import jwt from "jsonwebtoken";

const generateToken=(id)=>{

    if(!process.env.JWT_TOKEN){
        throw new Error(
            "JWT Token Not Found"
        );
    }
    return jwt.sign(
        {id},
        process.env.JWT_TOKEN,
        {
            expiresIn:"7d"
        }
    );
};

export default generateToken;