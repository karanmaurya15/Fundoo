import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservices/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }


  onSubmit() {

    if (this.forgotPasswordForm.valid) {
      console.log("email", this.forgotPasswordForm.value);
      let payload = {
        email: this.forgotPasswordForm.value.email,
        service : "advance"
      }
      this.userService.forgotpassword(payload).subscribe((reponce:any)=>{
        console.log(reponce);
      })
    }

  }
}

