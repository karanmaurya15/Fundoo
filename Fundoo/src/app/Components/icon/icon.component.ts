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
}
