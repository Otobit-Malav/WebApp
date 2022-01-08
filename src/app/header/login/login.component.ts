import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  hide=true;
  email:string='';
  pass:string=''
  constructor(private fb:FormBuilder, private router:Router) {
    this.loginform = fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  logindata(){
    let profile = JSON.parse(localStorage.getItem('user') || '[]');
    console.log(profile)
    if(this.loginform.value.email==profile.email && this.loginform.value.password==profile.password)
    {
      this.router.navigate(['/home'])
    }
    else{
      alert("Email or Password is not correct")
    }
  }
}
