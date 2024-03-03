import jwt from "jsonwebtoken"
import Envs from "../constants/Envs";
export function generateToken(userId: string) {
    const expiresIn: number = 7 * 24 * 3600 ;
    const token: string = jwt.sign({ userId }, Envs.secret, {
      expiresIn: expiresIn,
    });
    const expires =  expiresIn * 1000;
    return { token, expires };
  }
