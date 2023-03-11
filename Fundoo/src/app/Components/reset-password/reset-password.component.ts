import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservices/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log('login', this.resetPasswordForm.value);
    if (this.resetPasswordForm.valid) {
      let payload = {
        password: this.resetPasswordForm.value.password,
        confirmpassword: this.resetPasswordForm.value.confirmPassword,
        service: "advance"
      }
      this.userService.resetpassword(payload).subscribe((reponse: any) => {
        console.log(reponse)
      })
    }
  }
}
