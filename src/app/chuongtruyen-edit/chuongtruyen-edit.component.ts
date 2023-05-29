import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { ChuongtruyenService } from '../services/chuongtruyen.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-chuongtruyen-edit',
  templateUrl: './chuongtruyen-edit.component.html',
  styleUrls: ['./chuongtruyen-edit.component.css']
})
export class ChuongtruyenEditComponent {
  submited: boolean = false;
  chuongtruyen: any;


  chuongtruyenForm = this.fb.group({
    id_chuong:['',Validators.required],
    id_truyen:['',Validators.required],
    sothutu:['',Validators.required],
    tenchuong:['',Validators.required],
    noidung:['',Validators.required],
    ngaydang:['',Validators.required],

  });
  constructor(private pd:ChuongtruyenService, private _router: Router,private fb:FormBuilder,private router:ActivatedRoute) { }
  
getALL(){
  this.pd.getChuongtruyen().subscribe(res => {
    this.chuongtruyen = res.result
  });
}
  ngOnInit(): void {
    this.getALL();
    
//lấy ra 1 sp để edit
    this.router.paramMap.subscribe(query =>{
      let id = query.get("id");
      this.pd.getID(id).subscribe(res =>{
        let mypro = res;
        this.chuongtruyenForm = this.fb.group({
          id_chuong:[mypro.id_chuong,Validators.required],
          id_truyen:[mypro.id_truyen,Validators.required],
          sothutu:[mypro.sothutu,Validators.required],
          tenchuong:[mypro.tenchuong,Validators.required],
          noidung:[mypro.noidung,Validators.required],
          ngaydang:[mypro.ngaydang,Validators.required],

        });
      })
      
    })
  }

  

  
  onCreate(){
    console.log(this.chuongtruyenForm.value)
    this.pd.create(this.chuongtruyenForm.value).subscribe(res =>{
      this.getALL();
      this.chuongtruyenForm.reset();
    })
  }

  get f(){return this.chuongtruyenForm.controls;}
  onEdit(): any{
    this.submited= true;
    if(this.chuongtruyenForm.invalid){return false}
    console.log(this.chuongtruyenForm.value);
  //sửa
  if (this.chuongtruyenForm.value.id_chuong != null) {
    this.pd.update(this.chuongtruyenForm.value, + this.chuongtruyenForm.value.id_chuong).subscribe(res =>{
      this._router.navigate(['/chuong']);
    })
  }
}}
