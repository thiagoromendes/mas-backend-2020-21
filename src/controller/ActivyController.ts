import {Request, Response} from 'express'
import { CreateActivyService } from '../services/CreateActivyService';
import { GetAtctiviesService } from '../services/GetAtctiviesService';

class ActivyController{

    async create(request:Request, response:Response){
        const activyData = request.body;
        const createActivy = new CreateActivyService();
        const activy = await createActivy.execute(activyData);
        return response.json(activy);
    }

    async show(request:Request, response:Response){
        const userId = request.body.user;
        
        const getActivies = new GetAtctiviesService();

        const activies = await getActivies.execute(userId);
        
        return response.json(activies);
    }
}

export {ActivyController}