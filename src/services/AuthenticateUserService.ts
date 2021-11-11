import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import authConfig from "../config/auth";
import { sign } from "jsonwebtoken";

interface AuthData {
    email: string;
    password: string
}

class AuthenticateUserService {  

    public async execute(data:AuthData):Promise<string | {}>{
        const {email, password} = data;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email});

        if(!user){
            return {
                error:'User not found'
            }
        }

        const comparePassword = await compare(password,user.password);

        if(!comparePassword){
            return {
                error: 'Incorrect password'
            }
        }

        const {secret,expiresIn} = authConfig.jwt;

        const token = sign({"role":"user"},secret,{
            //algorithm:"RS256",
            subject:user.id,
            expiresIn
        });

        const {id, name, email:emailUser} = user

        return {
            user:{
                id,
                name,
                email: emailUser
            },
            token
        };
    }

}

export {AuthenticateUserService}