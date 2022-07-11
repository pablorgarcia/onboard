import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore/lite';
import { BehaviorSubject, Observable } from 'rxjs';
import { Commentator } from '../models/commentator';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CommentatorService {

  // Observable data
  private commentatorSubject: BehaviorSubject<Commentator[]>; // sujeto, canal conecta observador y observado
  private commentator: Commentator[] = []; // propiedad que va a ser dinamico, observado
  public commentator$: Observable<Commentator[]> = new Observable(); // cambia el estado del observado, observador

  constructor() {
    this.getComentator();
    this.commentatorSubject = new BehaviorSubject<Commentator[]>(this.commentator);
    this.commentator$ = this.commentatorSubject.asObservable();
  }

  addComentator(commentator: Commentator) {
    const commentatorRef = collection(ConfigService.getFirestoreApp(), 'Commentator');
    return addDoc(commentatorRef, commentator);
  }

  updateComentator(commentator: Commentator) {
    // https://console.firebase.google.com/project/gptwittermadrid-cd11a/firestore/data/~2FCommentator~2FqgGskPlVyse5URnreJJz
    // https://github.com/firebase/snippets-node/blob/HEAD/firestore/main/index.js
    const commentatorRef = collection(ConfigService.getFirestoreApp(), 'Commentator');
    //return updateDoc(commentatorRef, commentator);
  }

  deleteComentator() {
    // https://console.firebase.google.com/project/gptwittermadrid-cd11a/firestore/data/~2FCommentator~2FqgGskPlVyse5URnreJJz
    // https://github.com/firebase/snippets-node/blob/HEAD/firestore/main/index.js
    const commentatorRef = collection(ConfigService.getFirestoreApp(), 'Commentator');
    // return deleteDoc(reference);
  }

  async getComentator() {
    if (!this.commentator.length) {
      // Traemos los productos que estaán en la DB
      const commentatorSnapshot = await getDocs(collection(ConfigService.getFirestoreApp(), 'Commentator'));
      const commentatorList = commentatorSnapshot.docs.map(doc => ({id: doc?.id, ...doc?.data()}));
      this.commentator = commentatorList as any; // any porque me devuelve el tipo de dato de firebase
    }
    this.commentatorSubject.next(this.commentator);
    return this.commentator;
  }

}
