import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserAuthserviceService {
   userID: User | undefined;

  constructor(
    public afs: AngularFirestore, 
    public afAuth: AngularFireAuth, 
    public router:Router
  ) {
    this.afAuth.authState.subscribe(user => {
        localStorage.setItem('user', JSON.stringify(this.userID));
    })
  }
  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['project-work']);
  }

  async register(email: string, password: string, fname:string,
    lname: string, phone:string, city:string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    // let uid = (await this.afAuth.currentUser).uid
    this.router.navigate(['user-page']);
    return from( this.afs.collection('/UserInfo').doc().set({
      firstName: fname, 
      lastName: lname, 
      email: email, 
      phone: phone, 
      city: city,
    }))
  }

}
