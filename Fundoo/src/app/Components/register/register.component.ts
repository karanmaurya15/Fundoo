import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservices/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      
    });
  }
  onSubmit() {

    if (this.registerForm.valid) {
      console.log('login', this.registerForm.value);

      let payload = {
        firstName: this.registerForm.value.firstname,
        lastName: this.registerForm.value.lastname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        service : "advance"
      }
      this.userService.register(payload).subscribe((response: any) => {
        console.log(response)
      })
    }
    else
      console.log("no data")

  }
}
