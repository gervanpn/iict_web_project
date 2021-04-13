import { Component, OnInit } from '@angular/core';
import { UserAuthserviceService } from '../services/user-authservice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public authService: UserAuthserviceService) { }

  ngOnInit(): void {
  }

}
