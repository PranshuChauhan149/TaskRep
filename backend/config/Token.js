import jwt from 'jsonwebtoken'

const genToken = async (userID) => {

try{
    const token =  jwt.sign({id: userID },process.env.TOKEN_SCRET,{expiresIn:"7d"})
    return token;
}
catch(error){
  console.log("Token Error");
  
}

}

export default genToken;