import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
 
  isShow: boolean = false;
  title : any;
  description: any;

  constructor( private noteService: NoteService) { }
  Show() {
    this.isShow = true;
  }

  Close() {
    this.isShow = false;
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
      console.log(this.title, this.description)

      let reqpayload ={
        "title":this.title,
        "description": this.description
      }
      this.noteService.createNote(reqpayload).subscribe((response: any) => {
        console.log(response)
      })
  }
  }
}
