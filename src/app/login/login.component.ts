import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'mratyunjaya';
  password: string = '';
  errorMessage: string = 'Invalid Credentials';
  invalidCredentials = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
 
    console.log("Inside loginClicked !!");

    if(this.username == "Mratyunjaya" && this.password == "1234") {
      console.log("Login Successful !!")
      this.invalidCredentials = false;
    }
    else{
      this.invalidCredentials = true;
    }
  }
}
