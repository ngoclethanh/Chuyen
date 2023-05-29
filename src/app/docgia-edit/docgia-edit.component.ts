import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { DocgiaService } from '../services/docgia.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-docgia-edit',
  templateUrl: './docgia-edit.component.html',
  styleUrls: ['./docgia-edit.component.css']
})
export class DocgiaEditComponent {
  submited: boolean = false;
  docgia: any;


  docgiaForm = this.fb.group({
    id_docgia:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],
    email:['',Validators.required],
    tendaydu:['',Validators.required],
    anh:['',Validators.required],

  });
  constructor(private pd:DocgiaService, private _router: Router,private fb:FormBuilder,private router:ActivatedRoute) { }
  
getALL(){
  this.pd.getDocgia().subscribe(res => {
    this.docgia = res.result
  });
}
  ngOnInit(): void {
    this.getALL();
    
//lấy ra 1 sp để edit
    this.router.paramMap.subscribe(query =>{
      let id = query.get("id");
      this.pd.getID(id).subscribe(res =>{
        let mypro = res;
        this.docgiaForm = this.fb.group({
          id_docgia:[mypro.id_docgia,Validators.required],
          username:[mypro.username,Validators.required],
          password:[mypro.password,Validators.required],
          email:[mypro.email,Validators.required],
          tendaydu:[mypro.tendaydu,Validators.required],
          anh:[mypro.anh,Validators.required],

        });
      })
      
    })
  }

  

  
  onCreate(){
    console.log(this.docgiaForm.value)
    this.pd.create(this.docgiaForm.value).subscribe(res =>{
      this.getALL();
      this.docgiaForm.reset();
    })
  }

  get f(){return this.docgiaForm.controls;}
  onEdit(): any{
    this.submited= true;
    if(this.docgiaForm.invalid){return false}
    console.log(this.docgiaForm.value);
  //sửa
  if (this.docgiaForm.value.id_docgia != null) {
    this.pd.update(this.docgiaForm.value, + this.docgiaForm.value.id_docgia).subscribe(res =>{
      this._router.navigate(['/docgia']);
    })
  }
}}
