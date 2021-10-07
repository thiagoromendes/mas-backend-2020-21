
interface ActivyData{
    name: string;
    activy_date: string;
    grade: number;
    courseUnitId: string;
}

class CreateActivyService{
    public async execute(data:ActivyData){
        const {name,activy_date,grade,courseUnitId} = data;

        const activy = {
            name,
            activy_date,
            grade,
            courseUnitId
        }

        return activy;
    }
}

export {CreateActivyService};