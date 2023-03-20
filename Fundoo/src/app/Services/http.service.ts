import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = 'http://fundoonotes.incubation.bridgelabz.com/api/';

  constructor(private httpClient: HttpClient) { }

  PostService(endpoint: string, reqpayload: any, token: boolean, httpHeadersOptions: any) {
    return this.httpClient.post(this.baseUrl + endpoint, reqpayload, token && httpHeadersOptions);
  }
  GetService(endpoint: string, token: boolean, httpHeadersOptions: any) {
    return this.httpClient.get(this.baseUrl + endpoint, token && httpHeadersOptions)
  }
  PutService(endpoint: string, token: boolean, httpHeadersOptions: any) {
    return this.httpClient.put(this.baseUrl + endpoint, token && httpHeadersOptions)
  }
  // DeleteService(endpoint: string, reqData: any, token: boolean, httpHeadersOptions: any) {
  //   return this.httpClient.delete(this.baseUrl+ endpoint, reqData,token && httpHeadersOptions)
}
  




