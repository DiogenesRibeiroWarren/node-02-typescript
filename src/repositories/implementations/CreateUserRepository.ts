import { UserMock } from "../../domain/user/mocks/User";
import { User } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";

export class CreateUserRepository implements ICreateUserRepository {

    save(user: User): User {
        UserMock.push(user)
        return user
    }

}