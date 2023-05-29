import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { TruyenService } from '../services/truyen.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-truyen-edit',
  templateUrl: './truyen-edit.component.html',
  styleUrls: ['./truyen-edit.component.css']
})
export class TruyenEditComponent {
  submited: boolean = false;
  truyen: any;


  truyenForm = this.fb.group({
    id_truyen:['',Validators.required],
    tentruyen:['',Validators.required],
    id_tacgia:['',Validators.required],
    id_theloai:['',Validators.required],
    trangthai:['',Validators.required],
    ngaydang:['',Validators.required],
    anh:['',Validators.required],
    mota:['',Validators.required],

  });
  constructor(private pd:TruyenService, private _router: Router,private fb:FormBuilder,private router:ActivatedRoute) { }
  
getALL(){
  this.pd.getTruyen().subscribe(res => {
    this.truyen = res.result
  });
}
  ngOnInit(): void {
    this.getALL();
    
//lấy ra 1 sp để edit
    this.router.paramMap.subscribe(query =>{
      let id = query.get("id");
      this.pd.getID(id).subscribe(res =>{
        let mypro = res;
        this.truyenForm = this.fb.group({
          id_truyen:[mypro.id_truyen,Validators.required],
          tentruyen:[mypro.tentruyen,Validators.required],
          id_tacgia:[mypro.id_tacgia,Validators.required],
          id_theloai:[mypro.id_theloai,Validators.required],
          trangthai:[mypro.trangthai,Validators.required],
          ngaydang:[mypro.ngaydang,Validators.required],
          anh:[mypro.anh,Validators.required],
          mota:[mypro.mota,Validators.required],

        });
      })
      
    })
  }

  

  
  onCreate(){
    console.log(this.truyenForm.value)
    this.pd.create(this.truyenForm.value).subscribe(res =>{
      this.getALL();
      this.truyenForm.reset();
    })
  }

  get f(){return this.truyenForm.controls;}
  onEdit(): any{
    this.submited= true;
    if(this.truyenForm.invalid){return false}
    console.log(this.truyenForm.value);
  //sửa
  if (this.truyenForm.value.id_truyen != null) {
    this.pd.update(this.truyenForm.value, + this.truyenForm.value.id_truyen).subscribe(res =>{
      this._router.navigate(['/truyen']);
    })
  }
}}
