
interface CourseUnitData{
    name: string;
    description: string;
}

class CreateCourseUnitService{
    public async execute(data:CourseUnitData){
        const {name,description} = data;

        const courseUnit = {
            name,
            description
        }

        return courseUnit;
    }
}

export {CreateCourseUnitService};