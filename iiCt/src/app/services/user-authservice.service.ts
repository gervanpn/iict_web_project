import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { User } from '@firebase/auth-types';
import { IdStorageService } from './id-storage.service';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthserviceService {
  user!: User;
  userInfo = {} as UserInfoService;
  currentUser: any;
  
  constructor( public afs: AngularFirestore, 
    public afAuth: AngularFireAuth, 
    public idstorage: IdStorageService,
    public router:Router)
  {
      this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
        }
     })
  }
    
  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.idstorage.setloggedIn("true")
    this.router.navigate(['about-me']);
    let uid = this.user.uid
    console.log("uid after login",uid)
    this.idstorage.setUid(uid)
  }
    
  async register(email: string, password: string, fname:string,
    lname: string, phone:string, city:string) {
    localStorage.removeItem('user');
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    var uid = this.user.uid
    console.log("uid after signup",uid)
    this.idstorage.setUid(uid)
    this.idstorage.setloggedIn("true")
    this.router.navigate(['about-me']);
    this.updateUserInfo(email,uid,fname,lname,phone,city)
  }


  async updateUserInfo(email: string,  uid: string, fname:string,
    lname: string, phone:string, city:string){
    return from( this.afs.collection('/UserInfo').doc(uid).set({
      firstName: fname, 
      lastName: lname, 
      email: email, 
      phone: phone, 
      city: city,
      companyName: "",
      companyPosition:"",
      admin: false
    }))
  } 

  async logout(){
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
    this.idstorage.setloggedIn("false")
    let uid=""
    this.idstorage.setUid(uid)
  }
}
