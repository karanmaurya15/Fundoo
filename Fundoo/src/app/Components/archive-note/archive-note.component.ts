import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {

  constructor(private noteService: NoteService) { }
  // isArchived = true;
  @Input() isArchived = true;
  @Input() noteArray = []
  ngOnInit() {
    this.archiveNoteList();
  }
  archiveNoteList() {
    this.noteService.ArchiveNoteServiceList().subscribe((res: any) => {
      console.log("archive data is ", res);
      this.noteArray = res.data.data;

    })
  }

}
