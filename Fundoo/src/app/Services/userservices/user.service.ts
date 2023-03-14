import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token: any;
  constructor(private httpService: HttpService) {
    // this.token=localStorage.getItem('token')
   }
  register(data: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization : 'token '
      })
    }
    console.log(data);
    return this.httpService.PostService('user/userSignUp', data, false, httpOptions);

  }

  login(reqpayload: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // Authorization : this.token  
      })
    }
    console.log(reqpayload);
    return this.httpService.PostService('user/login', reqpayload, true, httpOptions);

  }
  forgotpassword(payload:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //Authorization : 'token' 
      })
    }
    console.log(payload);
    return this.httpService.PostService('user/reset', payload, false, httpOptions);

  }
  resetpassword(payload:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        //Authorization : 'token' 
      })
    }
    console.log(payload);
    return this.httpService.PostService('user/reset-password', payload, false, httpOptions);

  }
}

