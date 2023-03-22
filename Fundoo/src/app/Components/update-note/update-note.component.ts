import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any;
  description: any;
  id: any;
  color:any;
  constructor(private noteService: NoteService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data)
  }
  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
    this.id = this.data.id;
     this.color = this.data.color
  }

  Close() {
    let result = {
      title: this.title,
      description: this.description,
      noteId: this.id,
      backgroundColor: this.color
    }
    console.log(result)
    this.noteService.updateNote(result).subscribe((reponce: any) => {
      console.log(reponce)
    })
    this.dialogRef.close();
  }
}
