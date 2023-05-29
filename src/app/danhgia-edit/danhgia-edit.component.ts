import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { DanhgiaService } from '../services/danhgia.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-danhgia-edit',
  templateUrl: './danhgia-edit.component.html',
  styleUrls: ['./danhgia-edit.component.css']
})
export class DanhgiaEditComponent {
  submited: boolean = false;
  danhgia: any;


  danhgiaForm = this.fb.group({
    id_danhgia:['',Validators.required],
    id_truyen:['',Validators.required],
    id_docgia:['',Validators.required],
    noidung:['',Validators.required],
    ngaydang:['',Validators.required],

  });
  constructor(private pd:DanhgiaService, private _router: Router,private fb:FormBuilder,private router:ActivatedRoute) { }
  
getALL(){
  this.pd.getDanhgia().subscribe(res => {
    this.danhgia = res.result
  });
}
  ngOnInit(): void {
    this.getALL();
    
//lấy ra 1 sp để edit
    this.router.paramMap.subscribe(query =>{
      let id = query.get("id");
      this.pd.getID(id).subscribe(res =>{
        let mypro = res;
        this.danhgiaForm = this.fb.group({
          id_danhgia:[mypro.id_danhgia,Validators.required],
          id_truyen:[mypro.id_truyen,Validators.required],
          id_docgia:[mypro.id_docgia,Validators.required],
          noidung:[mypro.noidung,Validators.required],
          ngaydang:[mypro.ngaydang,Validators.required],

        });
      })
      
    })
  }

  

  
  onCreate(){
    console.log(this.danhgiaForm.value)
    this.pd.create(this.danhgiaForm.value).subscribe(res =>{
      this.getALL();
      this.danhgiaForm.reset();
    })
  }

  get f(){return this.danhgiaForm.controls;}
  onEdit(): any{
    this.submited= true;
    if(this.danhgiaForm.invalid){return false}
    console.log(this.danhgiaForm.value);
  //sửa
  if (this.danhgiaForm.value.id_danhgia != null) {
    this.pd.update(this.danhgiaForm.value, + this.danhgiaForm.value.id_danhgia).subscribe(res =>{
      this._router.navigate(['/danhgia']);
    })
  }
}}
