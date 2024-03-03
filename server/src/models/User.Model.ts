import { ObjectId } from "mongodb";
import {  Schema, model, models } from "mongoose";
import { z } from "zod";

const userSchema = z.object({
    _id: z.instanceof(ObjectId),
    fname: z.string(),
    lname: z.string(),
    email: z.string().email("Invalid email format"),
    password: z.string(),
    gender: z.string(),
    address: z.string(),
    telephone: z.string(),
    dateOfBirth: z.string(),
    role: z.string(),
});
export type IUser = z.infer<typeof userSchema>;

const UserSchema = new Schema<IUser>({
    fname: { type: String, required: true,   }, 
    lname: { type: String, required: true,   }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true,   }, 
    gender: { type: String, required: true,   }, 
    address: { type: String, required: true,   }, 
    telephone: { type: String, required: true,   }, 
    dateOfBirth: { type: String, required: true,  }, 
    role: { type: String, required: true },
});
const User = models.User || model("User", UserSchema);
export default User; 