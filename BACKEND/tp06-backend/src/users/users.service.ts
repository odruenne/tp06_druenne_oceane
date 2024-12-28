import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

import * as usersData from './data/users.json'
import * as usersDTO from './data/usersDTO.json'
import { UserDTO } from './interfaces/userDTO.interface';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];
    private readonly usersDataDTO: UserDTO[] = [];

    constructor() {
        this.users = usersData as User[];
        this.usersDataDTO = usersDTO as UserDTO[];
    }

    async findOne(login: string): Promise<User | undefined> {
        return this.users.find(user => user.login === login);
    }

    async getDataFromUser(login: string) : Promise<UserDTO | undefined> {
        return this.users.find(user => user.login === login);
    }
}
