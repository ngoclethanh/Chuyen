import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruyenService } from 'src/app/services/truyen.service';
import { ChuongtruyenService } from 'src/app/services/chuongtruyen.service';
import * as _ from 'lodash'
@Component({
  selector: 'app-doctruyen',
  templateUrl: './doctruyen.component.html',
  styleUrls: ['./doctruyen.component.css']
})
export class DoctruyenComponent implements OnInit {


  truyen: any = this.pd.getTruyen();
  chuong: any = this.ct.getChuongtruyen();
  listCHuong: any = [];
  currentIndex = 0;
  disabledNextPage: boolean = false;
  disabledPreviousPage: boolean = true;
  constructor(private ct: ChuongtruyenService, private pd: TruyenService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id_truyen = this._route.snapshot.paramMap.get('id')!;

    this.getID();
    this.ct.getChuongtruyen().subscribe({
      next: (value) => {
        this.listCHuong = value;
        this.listCHuong = this.listCHuong.filter((x: any) => x.id_truyen === id_truyen)
        this.listCHuong = _.orderBy(this.listCHuong, 'sothutu');
      },
    })
    let stt = sessionStorage.getItem('stt')
    this.currentIndex = stt ? +stt - 1 : 0;
    if (this.currentIndex > 0) {
      this.disabledPreviousPage = false;
    }
    setTimeout(() => {
      if (this.currentIndex === this.listCHuong.length - 1) {
        this.disabledNextPage = true;
      }
    }, 50);
  }

  getID(id?: any) {
    this._route.paramMap.subscribe(query => {
      let id = query.get("id");
      this.pd.getID(id).subscribe(res => {
        this.truyen = res;
      })

    }
    )
  }
  loadPage(next: boolean) {
    if (next) {
      this.currentIndex++;
      if (this.currentIndex < this.listCHuong.length - 1) {
        // Hiển thị phần tử tiếp theo
        this.listCHuong[this.currentIndex].noidung;
        this.disabledNextPage = false;
        this.disabledPreviousPage = false;

      } else {
        this.disabledNextPage = true;
      }
    } else {
      this.currentIndex--;

      if (this.currentIndex > 0) {
        this.disabledPreviousPage = false;
        this.disabledNextPage = false;

      } else {
        this.disabledPreviousPage = true;
      }

    }
    sessionStorage.setItem('stt', this.listCHuong[this.currentIndex].sothutu)

  }
}

