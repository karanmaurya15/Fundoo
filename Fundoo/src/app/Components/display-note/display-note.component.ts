import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {
  @Input() noteList: any
  @Input() isArchivedChild: any
  @Input() isTrashchild: any
   childIsArchive: boolean= true;
   childIsTrash: boolean= true;
  //  title: any;
  // description: any;
  // note:any;
  @Output() messageArchiveEvent = new EventEmitter<any>();
  @Output() messageTrashEvent = new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    this.childIsTrash= this.isTrashchild
    this.childIsArchive = this.isArchivedChild;
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      height: 'auto',
      data: note,
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed', response);
    });
  }

  archiverefresh(event: any) {
    console.log(event);
    this.messageArchiveEvent.emit(event);
  }

  trashRefresh(event: any) {
    console.log(event);
    this.messageTrashEvent.emit(event)
  }
}
