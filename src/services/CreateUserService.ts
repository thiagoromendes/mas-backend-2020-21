
interface UserData{
    name:string;
    email:string;
    password:string;
}

class CreateUserService{

    public async execute(data:UserData){
        const {name,email,password} = data;

        const user = {
            name,
            email,
            password
        }

        return user;
    }
}

export {CreateUserService}