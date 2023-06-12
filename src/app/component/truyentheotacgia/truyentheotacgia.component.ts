import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruyenService } from 'src/app/services/truyen.service';
import { TacgiaService } from 'src/app/services/tacgia.service';
import { ChuongtruyenService } from 'src/app/services/chuongtruyen.service';
import { DanhgiaService } from 'src/app/services/danhgia.service';
import { DocgiaService } from 'src/app/services/docgia.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-truyentheotacgia',
  templateUrl: './truyentheotacgia.component.html',
  styleUrls: ['./truyentheotacgia.component.css'],
})
export class TruyentheotacgiaComponent implements OnInit {
  tacgia: any = [];
  chuong: any = [];

  truyen: Array<any> = [];

  id_tacgia: string = '';

  constructor(
    private ct: ChuongtruyenService,
    public pd: TruyenService,
    private tl: TacgiaService,
    private tg: TacgiaService,
    private dg: DanhgiaService,
    private nd: DocgiaService,
    private _route: ActivatedRoute,
    private router: Router
  ) {
    this.id_tacgia = this._route.snapshot.paramMap.get('id')!;
  }
  @ViewChild('form', { static: false }) form!: NgForm;

  model = {
    id_truyen: 0,
    tenchuong: null,
    noidung: null,
    sothutu: 0,
  };
  reset() {
    this.form?.reset();
    this.form?.resetForm();
    this.model = {
      id_truyen: 0,
      tenchuong: null,
      noidung: null,
      sothutu: 0,
    };
  }
  getData(item: any) {
    this.model.id_truyen = item.id_truyen;
  }
  ngOnInit(): void {
    //this.getID();
    this.getTruyen();
  }
  getTruyen() {
    this.pd.getTruyen().subscribe((res) => {
      this.truyen = res;
      this.truyen = this.truyen.filter(
        (truyen) => truyen.id_tacgia === +this.id_tacgia
      );
    });
  }
  onCreate(): any {
    this.ct.create(this.model).subscribe((res) => {
      alert('Thêm chương thành công');
    });
  }
}
