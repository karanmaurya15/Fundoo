import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string= 'http://fundoonotes.incubation.bridgelabz.com/api/';

  constructor(private httpClient: HttpClient) { }

  PostService(endpoint: string, reqpayload: any, token: boolean, httpHeadersOptions: any) {
    return this.httpClient.post(this.baseUrl + endpoint,reqpayload,token&& httpHeadersOptions);
  }
  GetService() {
  
  }
  PutService() {

  }
  DeleteService() {
    
  }
  
}
