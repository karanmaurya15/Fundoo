import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }
  onSubmit() {
       console.log("login ",this.loginForm.value)
         
       
       let data={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password 
      }
}

}
