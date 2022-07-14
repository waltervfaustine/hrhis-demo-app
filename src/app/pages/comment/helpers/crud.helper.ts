import { Observable, of } from 'rxjs';
import { users } from '../database/db';
import { User } from '../models/user.model';
import * as _ from 'lodash';

export const addUserDataInDB = (user: User): Observable<User[]> => {
    return of([...users, user]);
};

export const updateUserDataInDB = (
    id: number,
    user: User
): Observable<User[]> => {
    const index = _.findIndex(users, (user: User) => {
        return user.id === id;
    });
    return of(users.splice(index, 1, user) as User[]);
};

export const getOneUserDataFromDB = (id: number): Observable<User> => {
    const index = _.findIndex(users, (user: User) => {
        return user.id === id;
    });
    return of(users[index] as User);
};

export const getAllUsersDataFromDB = () => {
    return of(users);
};

export const deleteUserDataFromDB = (id: number): Observable<User[]> => {
    const index = _.findIndex(users, (user: User) => {
        return user.id === id;
    });
    users.splice(index, 1) as User[];
    return of(users);
};
