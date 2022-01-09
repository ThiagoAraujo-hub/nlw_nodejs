import { UsersRepository } from "src/repositories/UserRepository"
import { getCustomRepository } from "typeorm";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    /* TODO: Adicionar uma injeção de dependência no projeto

    Exemplo:
    private readonly _userRepository: UserRepository;

    constructor(userRepository: UserRepository){
        this._userRepository = userRepository;
    } 
    */

    async execute({ name, email, admin }: IUserRequest) {
        if (!name || !email) 
            throw new Error("email and name are required");

        const usersRepository = getCustomRepository(UsersRepository);
        const userAlreadyExists = await usersRepository.findOne({ email });

        if(userAlreadyExists) 
            throw new Error("User already exists");

        const user = usersRepository.create({ name, email, admin });
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }