import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

loginForm !: FormGroup

  getback:boolean = true ;

  goBack() {
 this.getback = !this.getback ; 
  }
  
  constructor (private router: Router) {}

  ngOnInit(): void {

    this.loginForm = new FormGroup (  {
      'email': new FormControl (''),
      'password': new FormControl ('')
    })
  }

}


