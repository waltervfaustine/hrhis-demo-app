import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  addUserDataInDB,
  deleteUserDataFromDB,
  getAllUsersDataFromDB,
  getOneUserDataFromDB,
  updateUserDataInDB,
} from '../helpers/crud.helper';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  createUser(user: User): Observable<User[]> {
    return addUserDataInDB(user);
  }

  updateUser(id: number, user: User): Observable<User[]> {
    return updateUserDataInDB(id, user);
  }

  getUser(id: number): Observable<User> {
    return getOneUserDataFromDB(id);
  }

  getUsers(): Observable<User[]> {
    return getAllUsersDataFromDB();
  }

  deleteUser(id: number): Observable<User[]> {
    return deleteUserDataFromDB(id);
  }
}
