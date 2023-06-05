import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Truyen } from 'src/app/models/Truyen';
import {  TruyenService} from 'src/app/services/truyen.service';
import { TacGia } from 'src/app/models/Tacgia';
import {  TacgiaService} from 'src/app/services/tacgia.service';
import { TheLoai } from 'src/app/models/Theloai';
import {  TheloaiService} from 'src/app/services/theloai.service';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-dangtruyen',
  templateUrl: './dangtruyen.component.html',
  styleUrls: ['./dangtruyen.component.css']
})
export class DangtruyenComponent {
  truyen: any;
  tacgia: any;
theloai:any;

  submited: any;

  dangtruyenForm = this.fb.group({
    id_truyen:'',
    tentruyen:'',
    id_tacgia:'',
    tentacgia:'',
    anh:'',
    tentheloai:'',
    trangthai:'',
    mota:'',
  });

  constructor(
     private td:TruyenService,  private tg: TacgiaService,
    private tl: TheloaiService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
   
    this.td.getTruyen().subscribe((res) => {
      this.truyen = res.result;
    });
    this.tg.getTacgia().subscribe((res) => {
      this.tacgia = res.result;
    });
    this.tl.getTheloai().subscribe((res) => {
      this.theloai = res.result;
    });

  }
  ngOnInit(): void {
    this.getALL();
  }
  get f() {
    return this.dangtruyenForm.controls;
  }
  onCreate(): any {
    this.submited = true;
    if (this.dangtruyenForm.invalid) {
      return false;
    }
    //thêm
    
    this.tg.create(this.dangtruyenForm.value).subscribe((res) => {
      this._route.navigate(['/home']);
    });
    this.tl.create(this.dangtruyenForm.value).subscribe((res) => {
      this._route.navigate(['/home']);
    });
    this.td.create(this.dangtruyenForm.value).subscribe((res) => {
      this._route.navigate(['/home']);
    });
  }

}
