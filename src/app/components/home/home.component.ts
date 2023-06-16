import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginForm } from 'src/app/models/auth/loginForm.model';
import { client } from 'src/app/models/client/client.model';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loginForm : FormGroup;
  public utilisateur : loginForm = new loginForm();

  constructor(
    private _route : Router,
    private _authService : AuthService
    ) { }

  ngOnInit(): void {
    // this.utilisateur = new loginForm();
    // this.utilisateur.email = "Alex@gmail.com"
    // this.utilisateur.password = "1234"
    // let currentUser : client;
    // this._authService.Login(this.utilisateur).subscribe(
    //   {
    //     next: (client) => {
    //       currentUser = client;
    //       if (currentUser != null){
    //         console.log("Connecté !!!")
    //       }
    //     },
    //     error: (error) => {
    //       console.log(error)
    //     }
    //   }
    // );
  }
}
