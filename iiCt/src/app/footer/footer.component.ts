import { Component, OnInit } from '@angular/core';
import { IdStorageService } from '../services/id-storage.service';
import { UserAuthserviceService } from '../services/user-authservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLoggedIn$:string | undefined

  constructor(public idstorage: IdStorageService,
    public userauthService: UserAuthserviceService)  { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.idstorage.getUloggedIn() || 'false'
  }

  reload(){
    setTimeout(function(){
    location.reload();
    },1000); 
  }
}
