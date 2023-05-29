import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TruyenService } from 'src/app/services/truyen.service';
import { FormBuilder } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-truyen',
  templateUrl: './truyen.component.html',
  styleUrls: ['./truyen.component.css']
})
export class TruyenComponent {
  truyen:Array<any> =[];

  sreachForm = this.fb.group({
    tentruyen:'',
  
    });
  
    constructor(private pd: TruyenService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
      
      this.pd.getTruyen().subscribe(res =>{
        this.truyen =res;
      })
    }
    onDelete(id:number){
  if(confirm("Bạn có chắc muốn xóa không ?")){
    this.pd.delete(id).subscribe(res =>{
      this.pd.getTruyen().subscribe(res =>{
        this.truyen =res;
        
      })
    });
  }
   }
   onSearch(){
 
    this.pd.getSearch(this.sreachForm.value.tentruyen).subscribe(res =>{
      this.truyen=res;
    })
   }
  
  
   
   }

  
  