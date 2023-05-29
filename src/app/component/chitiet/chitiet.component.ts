import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TruyenService } from 'src/app/services/truyen.service';
import { TheloaiService } from 'src/app/services/theloai.service';
import { TacgiaService } from 'src/app/services/tacgia.service';
import { ChuongtruyenService } from 'src/app/services/chuongtruyen.service';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {


  truyen: any;
  theloai: any = [];
  tacgia: any =[];
  chuongtruyen: Array<any> = [];
  thuvien: Array<any> = [];
  id_truyen: string = '';
  tentheloai: string = '';
  tentacgia:string='';


  constructor(private ct: ChuongtruyenService, public pd: TruyenService, private tl: TheloaiService, private tg: TacgiaService, private _route: ActivatedRoute) {
    this.id_truyen = this._route.snapshot.paramMap.get('id')!;
    this.getTheloai();
    this.getIdtruyen();
    this.getTacgia();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.tentheloai = this.theloai?.find((x: any) => x.id_theloai === this.truyen.id_theloai)?.tentheloai;
     this.tentacgia =this.tacgia?.find((x: any) => x.id_tacgia === this.truyen.id_tacgia)?.tentacgia;

    }, 50);

    //this.getID();

    this.ct.getChuongtruyen().subscribe(res => {
      this.chuongtruyen = res;
      this.chuongtruyen = this.chuongtruyen.filter((chuongtruyen) => chuongtruyen.id_truyen === this.id_truyen)
    })




  }
  getTheloai() {
    this.tl.getTheloai().subscribe({
      next: (value) => {
        this.theloai = value;
      },
    })


  }

  getIdtruyen() {
    this.pd.getID(this.id_truyen).subscribe(res => {
      this.truyen = res;
    })
  }
  getTacgia() {
    this.tg.getTacgia().subscribe(res => {
      this.tacgia = res;
    })
  }
  // getID(id?: any) {
  //   this._route.paramMap.subscribe(query => {
  //     let id = query.get("id");



  //     // this.ct.getID(id).subscribe(res => {
  //     //   this.chuongtruyen = res;
  //     // })




  //   }


  //   )
  // }
  onAddThuvien(truyen: any) {
    let index = this.thuvien.findIndex((item: any) => {
      return item.id_truyen == truyen.id_truyen
    });
    if (index >= 0) {
      this.thuvien[index].qnt += 1;
    } else {
      let thuvienItem: any = {
        id_truyen: truyen.id_truyen,
        tentruyen: truyen.tentruyen,
        anh: truyen.anh,


      }
      this.thuvien.push(thuvienItem);
    }
    /// lưu vào storage
    this.pd.saveThuvien(this.thuvien);
    alert('Bạn đã thêm thành công vào danh sách yêu thích  !')
  }


}


