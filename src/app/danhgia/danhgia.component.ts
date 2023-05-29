import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DanhgiaService } from 'src/app/services/danhgia.service';
import { FormBuilder } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-danhgia',
  templateUrl: './danhgia.component.html',
  styleUrls: ['./danhgia.component.css']
})
export class DanhgiaComponent {
  danhgia:Array<any> =[];

  sreachForm = this.fb.group({
    id_danhgia:'',
  
    });
  
    constructor(private pd: DanhgiaService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
      
      this.pd.getDanhgia().subscribe(res =>{
        this.danhgia =res;
      })
    }
    onDelete(id:number){
  if(confirm("Bạn có chắc muốn xóa không ?")){
    this.pd.delete(id).subscribe(res =>{
      this.pd.getDanhgia().subscribe(res =>{
        this.danhgia =res;
        
      })
    });
  }
   }
  
   onSearch(){
 
    this.pd.getSearch(this.sreachForm.value.id_danhgia).subscribe(res =>{
      this.danhgia=res;
    })
   }
  
   
   }

  
  