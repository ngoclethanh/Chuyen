import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TheloaiService } from 'src/app/services/theloai.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-theloai',
  templateUrl: './theloai.component.html',
  styleUrls: ['./theloai.component.css']
})
export class TheloaiComponent {
  theloai:Array<any> =[];
  sreachForm = this.fb.group({
    tentheloai:'',
  
    });

  
    constructor(private pd: TheloaiService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
      
      this.pd.getTheloai().subscribe(res =>{
        this.theloai =res;
      })
    }
    onDelete(id:number){
      if(confirm("Bạn có chắc muốn xóa không ?")){
        this.pd.delete(id).subscribe(res =>{
          this.pd.getTheloai().subscribe(res =>{
            this.theloai =res;
            
          })
        });
      }
       }
       onSearch(){
 
        this.pd.getSearch(this.sreachForm.value.tentheloai).subscribe(res =>{
          this.theloai=res;
        })
       }
      
      }