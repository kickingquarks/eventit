import { Injectable } from '@angular/core';

import { User } from './user';
import { Users } from './db';

@Injectable()
export class UserService {
    getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
}