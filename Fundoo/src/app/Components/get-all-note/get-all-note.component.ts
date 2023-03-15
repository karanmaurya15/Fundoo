import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {

  noteArray=[]
  constructor (private noteService:NoteService){}
  ngOnInit(){  
  }
   GetAllNote(){
       this.noteService.getAllNotes().subscribe((response:any)=>{
        this.noteArray=response.data
        console.log(this.noteArray);
       })
   }

}
