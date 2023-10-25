import { Component, OnInit } from '@angular/core';
import { ClassControllerService, FilterClass } from '../swagger';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-class-new',
  templateUrl: './class-new.component.html',
  styleUrls: ['./class-new.component.css'],
  // scripts:['./scipt.js']
})
export class ClassNewComponent implements OnInit{
  formdata: FormGroup
data : any;
  ngOnInit(): void {

  }

  constructor(private classControllerService: ClassControllerService,
    private formBuilder: FormBuilder){
    const pageSize = new FilterClass(0, 20);
      this.classControllerService.filter(pageSize).subscribe(resp => {this.data = resp.content
      console.log(this.data)
      });
      this.formdata =this.formBuilder.group({
        subject:'Chọn môn học',
        city:'Chọn tỉnh/thành',
        district:'Chọn quận/huyện',
        level_school:'Chọn cấp học',
        level:'Chọn trình độ',
        sex:'Yêu Cầu Giới Tính'
      })
  }

  onClickSubmit(data:any){
    console.log(data.value)
  }
}
