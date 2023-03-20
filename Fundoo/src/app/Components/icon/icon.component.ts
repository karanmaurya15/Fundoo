import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any

  ngOnInit() { }
  constructor(private noteService: NoteService) { }
  colors = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
  ];


  deleteNote() {
    let data = {
      noteIdList: [this.noteCard.id],
      isDeleted: true

    }
    console.log(data)
    this.noteService.trashNoteService(data).subscribe((response: any) => {
      console.log(response)
    })
  }
  archiveNote() {
    let data = {
      noteIdList: [this.noteCard.id],
      isArchived: true
    }
    console.log(data);
    this.noteService.ArchiveNoteService(data).subscribe((response: any) => {
      console.log('notes moved to archived', response);
    })
  }
  Color(color:any){
    this.noteCard.color=color
    let data={
      noteIdList: [this.noteCard.id],
      color:color
    }
    console.log(data);
    this.noteService.ColorService(data).subscribe((response : any) => {
      console.log(response);
    
    })
  }
}
