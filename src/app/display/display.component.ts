import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
    users=[{'name':"","age":"","place":""}];
    constructor(private api:ApiService){
      this.api.getUsersFromApi().subscribe((data:any)=>{
        console.log(data)
      })
    }

}
