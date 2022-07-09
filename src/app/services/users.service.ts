import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore/lite';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // "Static" para consumir menos memoria

  // Almacenamos los productos de la DB
  private usersCollection = collection(ConfigService.getFirestoreApp(), 'Users');

  // sujeto, canal conecta observador y observado
  private userSubject: BehaviorSubject<User[]>;
  // propiedad que va a ser dinamico, observado
  private users: User[] = [];
  // se encarga de cambiar el estado del observado, observador
  public users$: Observable<User[]> = new Observable();

  constructor() {
    this.getUser();
    this.userSubject = new BehaviorSubject<User[]>(this.users);
    this.users$ = this.userSubject.asObservable();
  }

  addUser(user: User) {
    this.users = [];
    addDoc(collection(ConfigService.getFirestoreApp(), 'Users'), user);
    this.getUser();
  }

  async getUser() {
    if (!this.users.length) {
      // Traemos los productos que estaán en la DB
      const usersSnapshot = await getDocs(collection(ConfigService.getFirestoreApp(), 'Users'));
      const usersList = usersSnapshot.docs.map(doc => ({id: doc?.id, ...doc?.data()}));
      this.users = usersList as any; // any porque me devuelve el tipo de dato de firebase
    }
    this.userSubject.next(this.users);
    return this.users;
  }

}
