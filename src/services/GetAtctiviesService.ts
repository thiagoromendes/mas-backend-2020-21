import { getRepository } from "typeorm";
import { Activy } from "../models/Activy";

interface UserId{
    id?:string
}

class GetAtctiviesService{
    
    public async execute(data:UserId){
        const activyRepository = getRepository(Activy);

        const activies = await activyRepository.find();

        if(!activies){
            return {
                message:"activies not found"
            }
        }

        return activies;
    }
}

export {GetAtctiviesService}