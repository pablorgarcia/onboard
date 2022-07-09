import { Injectable } from '@angular/core';
import { collection, addDoc } from 'firebase/firestore/lite';
import { Commentator } from '../models/commentator';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CommentatorService {

  constructor() {}

  addComentator(commentator: Commentator) {
    const userRef = collection(ConfigService.getFirestoreApp(), 'Commentator');
    return addDoc(userRef, commentator);
  }

}
