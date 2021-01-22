import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserAuthserviceService {
  // user: User;

  constructor(
    public afs: AngularFirestore, 
    public afAuth: AngularFireAuth, 
    public router:Router
  ) {
  //   this.afAuth.authState.subscribe(user => {
  //     if (user){
  //       this.user = user;
  //       localStorage.setItem('user', JSON.stringify(this.user));
  //     } else {
  //       localStorage.setItem('user', null);
  //     }
  //  })
  }
  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['project-work']);
  }
}
