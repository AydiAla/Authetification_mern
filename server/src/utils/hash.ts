import bcrypt from "bcryptjs";
function hash(password: string )  {
const salt = 10 ; 
const hachedPass = bcrypt.hashSync(password , salt)
return hachedPass 

}

export default hash 