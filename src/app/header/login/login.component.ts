import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  hide=true;
  constructor(private fb:FormBuilder) {
    this.loginform = fb.group({
      email: new FormControl(),
      password: new FormControl(),
    })
   }

  ngOnInit(): void {
  }

  logindata(){
    console.log(this.loginform);
    
  }
}
