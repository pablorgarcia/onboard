import { Injectable } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

import { environment } from './../../environments/environment';

const app = initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public static getFirestoreApp() {
    return getFirestore(app)
  }
}
