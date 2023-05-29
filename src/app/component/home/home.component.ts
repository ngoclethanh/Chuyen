import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Truyen } from 'src/app/models/Truyen';
import {  TruyenService} from 'src/app/services/truyen.service';
import { FormBuilder } from '@angular/forms';
import { TheLoai } from 'src/app/models/Theloai';

import { TheloaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  truyen:any =[];//any:nhận tất cả các kiểu dl
  thuvien:Array<any> =[];
  theloai:Array<any> =[];

  p:number=1;
  c:number=1;

fiterStatus=""
  sreachForm = this.fb.group({
    tentruyen:'',
  
    });
  constructor(private pd: TruyenService,private tl: TheloaiService,private _router:Router,private fb:FormBuilder) { }

    

  ngOnInit(): void {
    this.getTruyen();
    this.getTheloai();

  }
  getTruyen(){
    this.pd.getTruyen().subscribe((res) =>{
      console.log(res);
      this.truyen =res;
    })
}
getTheloai(id?:any){
  this.tl.getTheloai().subscribe((res) =>{
    console.log(res);
    this.theloai =res;
  })
}
onAddThuvien(truyen :any){
  let index = this.thuvien.findIndex((item:any)=>{
    return item.id_truyen == truyen.id_truyen
  });
  if(index >=0){
    this.thuvien[index].qnt +=1 ;
  }else{
    let thuvienItem:any ={
      id_truyen: truyen.id_truyen,
      tentruyen: truyen.tentruyen,
      anh: truyen.anh,
  
     
    }
    this.thuvien.push(thuvienItem); 
  }
  /// lưu vào storage
  this.pd.saveThuvien(this.thuvien);
  alert('Bạn đã thêm thành công vào danh sách yêu thích  !')
    }
    onSearch(){
 
      this.pd.getSearch(this.sreachForm.value.tentruyen).subscribe(res =>{
        this.truyen=res;
      })
     }
}
