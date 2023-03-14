import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/userservices/user.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
 
  isShow: boolean = false;
  title : any;
  description: any;

  constructor( private userService: UserService) { }
  Show() {
    this.isShow = true;
  }

  Close() {
    this.isShow = false;
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
      console.log(this.title, this.description)

      let reqpayload ={
        "title":this.title,
        "description": this.description
      }
      this.userService.register(reqpayload).subscribe((response: any) => {
        console.log(response)
      })
  }
  }
}
