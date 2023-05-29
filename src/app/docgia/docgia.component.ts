import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DocgiaService } from 'src/app/services/docgia.service';
import { FormBuilder } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-docgia',
  templateUrl: './docgia.component.html',
  styleUrls: ['./docgia.component.css']
})
export class DocgiaComponent {
  docgia:Array<any> =[];
  sreachForm = this.fb.group({
    tendaydu:'',
  
    });

  
    constructor(private pd: DocgiaService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
      
      this.pd.getDocgia().subscribe(res =>{
        this.docgia =res;
      })
    }
    onDelete(id:number){
  if(confirm("Bạn có chắc muốn xóa không ?")){
    this.pd.delete(id).subscribe(res =>{
      this.pd.getDocgia().subscribe(res =>{
        this.docgia =res;
        
      })
    });
  }
   }
  
   onSearch(){
 
    this.pd.getSearch(this.sreachForm.value.tendaydu).subscribe(res =>{
      this.docgia=res;
    })
   }
  
   
   }

  
  