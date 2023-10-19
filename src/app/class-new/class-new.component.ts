import { Component, OnInit } from '@angular/core';
import { ClassControllerService, FilterClass } from '../swagger';

@Component({
  selector: 'app-class-new',
  templateUrl: './class-new.component.html',
  styleUrls: ['./class-new.component.css']
})
export class ClassNewComponent implements OnInit{

data : any;
  ngOnInit(): void {
    
  }

  constructor(private classControllerService: ClassControllerService){
    const pageSize = new FilterClass(0, 20);
      this.classControllerService.filter(pageSize).subscribe(resp => {this.data = resp.content
      console.log(this.data)
      });
  }

}
