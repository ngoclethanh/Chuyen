import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { TacgiaService } from '../services/tacgia.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-tacgia-edit',
  templateUrl: './tacgia-edit.component.html',
  styleUrls: ['./tacgia-edit.component.css']
})
export class TacgiaEditComponent {
  submited: boolean = false;
  tacgia: any;


  tacgiaForm = this.fb.group({
    id_tacgia:['',Validators.required],
    tentacgia:['',Validators.required],
    ngaysinh:['',Validators.required],
    gioitinh:['',Validators.required],

  });
  constructor(private pd:TacgiaService, private _router: Router,private fb:FormBuilder,private router:ActivatedRoute) { }
  
getALL(){
  this.pd.getTacgia().subscribe(res => {
    this.tacgia = res.result
  });
}
  ngOnInit(): void {
    this.getALL();
    
//lấy ra 1 sp để edit
    this.router.paramMap.subscribe(query =>{
      let id = query.get("id");
      this.pd.getID(id).subscribe(res =>{
        let mypro = res;
        this.tacgiaForm = this.fb.group({
          id_tacgia:[mypro.id_tacgia,Validators.required],
          tentacgia:[mypro.tentacgia,Validators.required],
          ngaysinh:[mypro.ngaysinh,Validators.required],
          gioitinh:[mypro.gioitinh,Validators.required],

        });
      })
      
    })
  }

  

  
  onCreate(){
    console.log(this.tacgiaForm.value)
    this.pd.create(this.tacgiaForm.value).subscribe(res =>{
      this.getALL();
      this.tacgiaForm.reset();
    })
  }

  get f(){return this.tacgiaForm.controls;}
  onEdit(): any{
    this.submited= true;
    if(this.tacgiaForm.invalid){return false}
    console.log(this.tacgiaForm.value);
  //sửa
  if (this.tacgiaForm.value.id_tacgia != null) {
    this.pd.update(this.tacgiaForm.value, + this.tacgiaForm.value.id_tacgia).subscribe(res =>{
      this._router.navigate(['/tacgia']);
    })
  }
}}
