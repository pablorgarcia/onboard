import { Injectable } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
//import { collection } from '@firebase/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) {}

  addUser(user: User) {
    const userRef = collection(this.firestore, 'Users');
    return addDoc(userRef, user);
  }

}
