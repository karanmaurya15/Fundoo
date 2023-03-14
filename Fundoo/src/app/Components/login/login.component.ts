import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log("login ", this.loginForm.value)

      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service : "advance"
      }
      this.userService.login(reqData).subscribe((response: any) => {
        console.log(response)
         localStorage.setItem('token',response.id);
      })
    }
    else 
    console.log("data not get");

  }
}
