import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore/lite';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Observable data
  private userSubject: BehaviorSubject<User[]>; // sujeto, canal conecta observador y observado
  private users: User[] = []; // propiedad que va a ser dinamico, observado
  public users$: Observable<User[]> = new Observable(); // cambia el estado del observado, observador

  // "Static" para consumir menos memoria

  // Almacenamos los productos de la DB
  // private usersCollection = collection(ConfigService.getFirestoreApp(), 'Users');

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
      console.log('2222', usersList)
      this.users = usersList as any; // "any" porque me devuelve el tipo de dato de firebase
    }

    // https://contactmentor.com/javascript-map-array-of-objects/
    this.users.map(({ created }, i) => {
      console.log('HOLA', i,{ created })

      /*
      getData(epochDate: any) {
        let myDate = new Date( epochDate *1000);
        console.log('1',myDate)
        myDate.toISOString();
        console.log('2',myDate)
        myDate.toLocaleString();
        console.log('3',myDate)
      }*/

    })

    // Ordenamos el array mediante el numero de kart (idNum)
    this.users.sort((a, b) => { return a.idNum - b.idNum; });
    this.userSubject.next(this.users);
    return this.users;
  }

}
