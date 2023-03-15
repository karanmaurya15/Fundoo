import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService) { this.token=localStorage.getItem('token') }

  createNote(reqpayload:any){
    this.token= localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization : this.token 
      })
    }
    return this.httpService.PostService('notes/addNotes',reqpayload, true, httpOptions);
  }

  getAllNotes(){
    this.token= localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization : this.token 
      })
    }
    return this.httpService.GetService('notes/getNotesList', true, httpOptions)
  }
}
