import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruyenService } from 'src/app/services/truyen.service';
import { TheloaiService } from 'src/app/services/theloai.service';
import { TacgiaService } from 'src/app/services/tacgia.service';
import { ChuongtruyenService } from 'src/app/services/chuongtruyen.service';
import { DanhgiaService } from 'src/app/services/danhgia.service';
import { DocgiaService } from 'src/app/services/docgia.service';


@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {


  truyen: any;

  theloai: any = [];
  tacgia: any = [];
  docgia: any = [];

  chuongtruyen: Array<any> = [];
  thuvien: Array<any> = [];
  id_truyen: string = '';
  tentheloai: string = '';
  tentacgia: string = '';
  tendaydu:string='';
  anh:string='';
  danhgia: Array<any> = [];
  cache =  JSON.parse(sessionStorage.getItem('user')!);
  modelComment ={id_truyen:0,id_docgia:0,noidung:null}


  constructor(private ct: ChuongtruyenService, public pd: TruyenService, private tl: TheloaiService, private tg: TacgiaService,private dg: DanhgiaService,private nd: DocgiaService,  private _route: ActivatedRoute,private router:Router) {
    this.id_truyen = this._route.snapshot.paramMap.get('id')!;
    this.getTheloai();
    this.getIdtruyen();
    this.getTacgia();
    this.getDocgia();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.tentheloai = this.theloai?.find((x: any) => x.id_theloai === this.truyen.id_theloai)?.tentheloai;
      this.tentacgia = this.tacgia?.find((x: any) => x.id_tacgia === this.truyen.id_tacgia)?.tentacgia;
     // this.tendaydu = this.docgia?.find((x: any) => x.id_docgia === this.danhgia.id_docgia)?.tendaydu;
      //this.anh = this.docgia?.find((x: any) => x.id_docgia === this.danhgia.id_docgia)?.anh;



    }, 50);

    //this.getID();

    this.ct.getChuongtruyen().subscribe(res => {
      this.chuongtruyen = res;
      this.chuongtruyen = this.chuongtruyen.filter((chuongtruyen) => chuongtruyen.id_truyen === +this.id_truyen);
    })
    this.getDanhGia();

    

  }
  getDanhGia(){
    this.dg.getDanhgia().subscribe(res => {
      this.danhgia = res;
      this.danhgia = this.danhgia.filter((danhgia) => danhgia.id_truyen === +this.id_truyen);
      this.danhgia = this.danhgia.map((x)=>{
        x.tendocgia = x.DocGia.tendaydu;
        return x;
      })
    })
  }

  getTheloai() {
    this.tl.getTheloai().subscribe({
      next: (value) => {
        this.theloai = value;
      },
    })


  }
  comment(){
      
     this.modelComment.id_docgia = +this.cache.id_docgia;
     this.modelComment.id_truyen =+this.id_truyen ;
     this.dg.create(this.modelComment).subscribe({
      next:(value) =>{
          this.getDanhGia();
          this.modelComment.noidung = null;
      },
     })
  }
  getDocgia() {
    this.nd.getDocgia().subscribe({
      next: (value) => {
        this.docgia = value;
      },
    })


  }
  docTruyenAll(id_truyen:string){
    sessionStorage.removeItem('stt');
    this.router.navigateByUrl(`/doctruyen/${id_truyen}`, { skipLocationChange: true }).then(); 
  }
  getIdTruyenByStt(item:any){
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    sessionStorage.setItem('stt',item.sothutu?.toString());
        this.router
          .navigate(['doctruyen', item.id_truyen])
          .then();
      });
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


