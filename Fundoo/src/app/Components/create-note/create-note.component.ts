import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();

  ngOnInit() { }

  isShow: boolean = false;
  title: any;
  description: any;

  constructor(private noteService: NoteService, private snackBar: MatSnackBar) { }
  Show() {
    this.isShow = true;
  }

  Close() {
    this.isShow = false;
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
      console.log(this.title, this.description)

      let reqpayload = {
        "title": this.title,
        "description": this.description
      }
      this.noteService.createNote(reqpayload).subscribe((response: any) => {
        console.log(response)
        this.messageEvent.emit(response);
        this.snackBar.open('Note created  Successfully', '', {
          duration: 1000,
        });
        this.title = null;
        this.description = null;
      })
    }
  }
}
