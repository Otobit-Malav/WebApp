import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup
  hide=true
  // user: any[]=[
  //   fname:string,
  //   lname:string,
  //   emailid:string,
  //   pass:string
  // ]
  fname:string=''
    lname:string=''
    emailid:string=''
    pass:string=''

  constructor(private fb: FormBuilder, private router:Router) {
    this.signupform=fb.group({
      firstname : ['',[Validators.required, Validators.minLength(1)]],
      lastname : ['',[Validators.required, Validators.minLength(1)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
      
    })
   }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.signupform.valid)
    {
      localStorage.setItem('user',JSON.stringify(this.signupform.value))
      this.router.navigate(['/login']);
    }
    console.log(this.signupform)
  }

}
