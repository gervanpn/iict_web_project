import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthserviceService {

  
  constructor(public afs: AngularFirestore, 
    public afAuth: AngularFireAuth, 
    public router:Router) {
    }
}
