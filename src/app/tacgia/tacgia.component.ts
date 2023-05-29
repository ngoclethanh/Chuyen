import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TacgiaService } from 'src/app/services/tacgia.service';
import { FormBuilder } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-tacgia',
  templateUrl: './tacgia.component.html',
  styleUrls: ['./tacgia.component.css']
})
export class TacgiaComponent {
  tacgia:Array<any> =[];
  sreachForm = this.fb.group({
    tentacgia:'',
  
    });

  
    constructor(private pd: TacgiaService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
      
      this.pd.getTacgia().subscribe(res =>{
        this.tacgia =res;
      })
    }
    onDelete(id:number){
  if(confirm("Bạn có chắc muốn xóa không ?")){
    this.pd.delete(id).subscribe(res =>{
      this.pd.getTacgia().subscribe(res =>{
        this.tacgia =res;
        
      })
    });
  }
   }
  
   onSearch(){
 
    this.pd.getSearch(this.sreachForm.value.tentacgia).subscribe(res =>{
      this.tacgia=res;
    })
   }
  
   
   }

  
  