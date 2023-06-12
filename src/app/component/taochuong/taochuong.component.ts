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
import {  ChuongtruyenService} from 'src/app/services/chuongtruyen.service';

@Component({
  selector: 'app-taochuong',
  templateUrl: './taochuong.component.html',
  styleUrls: ['./taochuong.component.css']
})
export class TaochuongComponent {
  tacgia: any;
  chuong:any;
theloai:any;
id_tacgia:string='';
  submited: any;
  taochuongForm = this.fb.group({
    id_truyen:0,
    sothutu: '',
    tenchuong: '',
    noidung: '',
    ngaydang: '',
  });
  user:any = {};

  constructor(
     private td:TruyenService, 
     private ct: ChuongtruyenService,
     private tg: TacgiaService,
    private tl: TheloaiService,
    private fb: FormBuilder,
    private _route: Router
  ) {}

  getALL() {
   
   
    this.ct.getChuongtruyen().subscribe((res) => {
      this.chuong = res.result;
    });
    this.tg.getTacgia().subscribe((res) => {
      this.tacgia = res.result;
    });
    this.tl.getTheloai().subscribe((res) => {
      this.theloai = res;
      console.log(this.theloai);
      
    });

  }
  
  ngOnInit(): void {
    this.getALL();
    this.user = JSON.parse(sessionStorage.getItem('user')!);

  }
  get f() {
    return this.taochuongForm.controls;
  }
  onCreate(): any {
    this.submited = true;
    const data= this.taochuongForm.getRawValue();
    //data.id_tacgia = this.user?.id_tacgia;
    data.id_truyen = +data.id_truyen!;

    //data.id_theloai =+data.id_theloai!;
    if (this.taochuongForm.invalid) {
      return false;
    }
    this.td.create(data).subscribe((res) => {
      this._route.navigate(['/home']);
    });
  }

}
