import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private searchData=new BehaviorSubject('')
  searchNote=this.searchData.asObservable();
  constructor() { }

  sendMessage(message:any){
    this.searchData.next(message)
  }
}
