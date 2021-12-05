import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firebaseAuth: AngularFireAuth) { }
  
  public get user$() {
    return this.firebaseAuth.user;
  }

  logOut() {
    this.firebaseAuth.signOut()
  }

  public signIn(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
  }

  public signUp(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
  }

}
