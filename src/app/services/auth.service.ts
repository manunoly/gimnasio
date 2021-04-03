import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { switchMap, map, take, first } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}

export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.afAuth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('afAuth user', user);
        this.currentUser$.next(user);
        let userF:User;
        userF = await this.afs.doc(`/users/${user.uid}`).valueChanges().toPromise() as any;
        this.currentUser$.next({...user, ...userF});
      } else {
        this.currentUser$.next(null);
      }
    });
  }

  async signup({ email, password, name = 'User' }): Promise<any> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    credential.user.updateProfile({
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then().catch();

    const uid = credential.user.uid;

    return this.afs.doc(`users/${uid}`).set({
      uid,
      email: credential.user.email,
      displayName: name,
    });
  }

  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<void> {
    this.afAuth.signOut();
    this.router.navigateByUrl('/login', { replaceUrl: true });
    return;
  }
}
