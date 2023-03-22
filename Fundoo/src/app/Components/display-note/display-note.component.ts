import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {
 @Input() noteList:any

//  title: any;
// description: any;
// note:any;
@Output() messageEvent = new EventEmitter<any>();
constructor(public dialog: MatDialog) {}

  openDialog(note : any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      height: 'auto',
      data: note,
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed',response);
    });
  }

  archiveEvent(event:any){
  console.log(event);
this.messageEvent.emit(event);
  }
}
