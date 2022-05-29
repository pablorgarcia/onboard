import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { User } from '../models/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}

  addUser(user: User) {
    const userRef = collection(ConfigService.getFirestoreApp(), 'Users');
    return addDoc(userRef, user);
  }

}
