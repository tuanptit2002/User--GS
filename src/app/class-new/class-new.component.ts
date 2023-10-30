import { Component, OnInit } from '@angular/core';
import {
  CityControllerService,
  ClassControllerService,
  DistrictControllerService,
  FilterClass, LevelSchoolControllerService,
  MajoredControllerService,
  SubjectControllerService,
  TechClassControllerService
} from '../swagger';
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
total:any;
numbers: any;
subjects:{ subject_id: number; subject_text: string; }[] = [];
citys:{ city_id: number; city_text: string; }[] = [];
districts:{district_id:number; district_text: string;}[] = [];
levelSchools:{levelSchool_id:number; levelSchool_text: string;}[] = [];
teachClasss: {teachClass_id:number; teachClass_text: string;}[] = [];
majoreds:{majored_id:number; majored_text: string;}[] = [];
  ngOnInit(): void {
    this.subjectControllerService.findAll1().subscribe(resp => resp.result?.map( x=> {
      if (x.id !== undefined && x.subject !== undefined) {
       // console.log(x)
      const subject = {subject_id: x.id, subject_text: x.subject};
      this.subjects = [subject, ...this.subjects]
      }
    }))
    this.cityControllerService.findAll4().subscribe(resp => resp.result?.map( x =>{
      if (x.id !== undefined && x.name !== undefined) {
        const city = {city_id: x.id, city_text: x.name};
        this.citys = [city, ...this.citys];
      }
    }))

  this.levelSchoolControllerService.findAll2().subscribe(resp => resp.result?.map( x =>{
    if (x.id !== undefined && x.name !== undefined) {
      const levelSchool = {levelSchool_id: x.id, levelSchool_text: x.name};
      this.levelSchools = [levelSchool, ...this.levelSchools];
    }
  }));

  this.teachClassControllerService.findAll().subscribe(resp => resp.result?.map( x =>{
    if (x.id !== undefined && x.classroom !== undefined) {
      const teachClass = {teachClass_id: x.id, teachClass_text: x.classroom};
      this.teachClasss = [teachClass, ...this.teachClasss];
    }
  }))

  this.majoredControllerService.findAll2().subscribe(resp => resp.result?.map( x =>{
    if (x.id !== undefined && x.name !== undefined) {
      const majored = {majored_id: x.id, majored_text: x.name};
      this.majoreds = [majored, ...this.majoreds];
    }
  }));

  }

  constructor(private classControllerService: ClassControllerService,
    private subjectControllerService: SubjectControllerService,
    private districtControllerService: DistrictControllerService,
    private cityControllerService: CityControllerService,
    private levelSchoolControllerService : LevelSchoolControllerService,
    private teachClassControllerService : TechClassControllerService,
    private majoredControllerService : MajoredControllerService,
    private formBuilder: FormBuilder){
   classControllerService.getTotal().subscribe(resp => {this.total = resp
    this.numbers = Array.from({ length: (this.total/12)+1 }, (_, i) => i + 1);
    // console.log(this.numbers)
  }
    );


    const pageSize = new FilterClass(0, 12);
      this.classControllerService.filter(pageSize).subscribe(resp => {this.data = resp.content
      // console.log(this.data);
      // console.log(resp)
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
    let tmp = data.value;
     if(tmp.city === 'Chọn tỉnh/thành'  ){
      tmp.city = undefined
     }
     if(tmp.subject === 'Chọn môn học'  ){
      tmp.subject = undefined
     }
     if(tmp.district === 'Chọn tỉnh/thành'  ){
      tmp.district = undefined
     }
     if(tmp.level_school === 'Chọn quận/huyện'  ){
      tmp.level_school = undefined
     }
     if(tmp.level === 'Chọn trình độ'  ){
      tmp.level = ""
     }
     if(tmp.sex === 'Yêu Cầu Giới Tính'  ){
      tmp.sex = ""
     }


    const filterClass =  new FilterClass(0,12,undefined,"", tmp.city  , tmp.district,tmp.level,tmp.level_school,tmp.subject,undefined,tmp.sex);
    console.log(filterClass);
    // console.log(data.value)

    this.classControllerService.filterPageUser(filterClass).subscribe(resp => this.data = resp.content);
  }

  nextPage(data:any){
    const pageSize = new FilterClass((data-1), 12);
    console.log("data ne"+ data);
    this.classControllerService.filter(pageSize).subscribe(resp => {this.data = resp.content
      console.log(this.data)
      });
  }

  searchDistrict(data:any){
    this.districts = [];
    this.districtControllerService.findDistrictToCity(data).subscribe(resp => {
      if (resp.result) {
        resp.result.map(x => {
          if (x.id !== undefined && x.name !== undefined) {
            const data = {district_id: x.id, district_text: x.name};
            this.districts = [data, ...this.districts];
          }
        })
      }
    })
  }
}
