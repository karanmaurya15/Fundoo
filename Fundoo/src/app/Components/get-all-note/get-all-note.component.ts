import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {

  noteArray = []
  constructor(private noteService: NoteService) { }
  
  ngOnInit() {
    this.GetAllNote()
  }
  GetAllNote() {
    this.noteService.getAllNotes().subscribe((response: any) => {
      console.log(response)
      this.noteArray = response.data.data
      console.log(this.noteArray);
      this.noteArray=this.noteArray.reverse();
      this.noteArray = this.noteArray.filter((result: any) => {
        return result.isDeleted == false && result.isArchived == false
      });
    })
  }
  receiveMessage(event:any){
    console.log(event);
    this.GetAllNote();
  }
  archiverefresh(event:any){
    console.log(event)
    this.GetAllNote();
  }
}
