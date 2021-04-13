import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdStorageService {

  constructor() { }

  setUid(Uid: string) {
		sessionStorage.setItem('uid', Uid);
  }
  
  getUId(): string {
    return JSON.parse(sessionStorage.getItem('uid') || '{}')
  }
  
  setloggedIn(isloggedin:string) {
		sessionStorage.setItem('isloggedin', isloggedin);
  }
  
  getUloggedIn(): string {
    return JSON.parse(sessionStorage.getItem('isloggedin') || '{}')
	}
}
