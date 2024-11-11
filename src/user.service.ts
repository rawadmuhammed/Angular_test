import { Injectable } from '@angular/core';
import {User} from './pages/users/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', biography: 'A passionate web developer.'},
    { id: 2, firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@example.com', biography: 'A data analyst with experience in big data and machine learning.' },
    { id: 3, firstName: 'Charlie', lastName: 'Brown', email: 'charlie.brown@example.com', biography: 'A graphic designer who brings ideas to life through visuals.' },
    { id: 4, firstName: 'Dana', lastName: 'White', email: 'dana.white@example.com', biography: 'An experienced project manager with a background in software development.' },
  ]

  constructor() { }

  getUsers(): User[]{
    return this.users;
  }
}
