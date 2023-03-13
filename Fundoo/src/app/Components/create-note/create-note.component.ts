import { Component } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent{
 
  isShow: boolean = false;
  

  Show() {
    this.isShow = true;
  }

  Close() {
    this.isShow = false;
  }

}
