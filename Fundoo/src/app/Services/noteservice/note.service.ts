import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token') }

  createNote(reqpayload: any) {
    this.token = localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.PostService('notes/addNotes', reqpayload, true, httpOptions);
  }

  getAllNotes() {
    this.token = localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token
      })
    }
    return this.httpService.GetService('notes/getNotesList', true, httpOptions)
  }

  trashNoteService(data: any) {
    console.log(data)
    this.token = localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token
      })
    };
    return this.httpService.PostService('notes/trashNotes', data, true, httpOptions)
  }
  trashNoteListService() {
    console.log(this.token);
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.GetService('notes/getTrashNotesList',true,httpOption);
  }

  updateNote(data: any) {
    this.token = localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token
      })
    };
    return this.httpService.PostService('notes/updateNotes', data, true,httpOptions)
  }
  ArchiveNoteService(data:any){
    console.log(this.token)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token
      })
    };
    return this.httpService.PostService('notes/archiveNotes', data, true,httpOptions)
  }

  ArchiveNoteServiceList(){
    console.log(this.token);
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.GetService('notes/getArchiveNotesList',true,httpOption);
  }
}

