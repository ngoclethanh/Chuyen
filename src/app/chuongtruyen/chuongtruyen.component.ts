import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ChuongtruyenService } from 'src/app/services/chuongtruyen.service';
import { FormBuilder } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-chuongtruyen',
  templateUrl: './chuongtruyen.component.html',
  styleUrls: ['./chuongtruyen.component.css']
})
export class ChuongtruyenComponent {
  chuongtruyen:Array<any> =[];

  sreachForm = this.fb.group({
    tenchuong:'',
  
    });
  
    constructor(private pd: ChuongtruyenService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
      
      this.pd.getChuongtruyen().subscribe(res =>{
        this.chuongtruyen =res;
      })
    }
    onDelete(id:number){
  if(confirm("Bạn có chắc muốn xóa không ?")){
    this.pd.delete(id).subscribe(res =>{
      this.pd.getChuongtruyen().subscribe(res =>{
        this.chuongtruyen =res;
        
      })
    });
  }
   }
   onSearch(){
 
    this.pd.getSearch(this.sreachForm.value.tenchuong).subscribe(res =>{
      this.chuongtruyen=res;
    })
   }
  
   
   }

  
  