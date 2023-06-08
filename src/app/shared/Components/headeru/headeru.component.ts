import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TruyenService } from 'src/app/services/truyen.service';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { TheloaiService } from 'src/app/services/theloai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headeru',
  templateUrl: './headeru.component.html',
  styleUrls: ['./headeru.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderuComponent implements OnInit {
  truyen: Array<any> = [];
  theloai: any[] = [];
  sreachForm = this.fb.group({
    tentruyen: '',
  });
  user: any ;
  docgia:any;
  model = {
    tentruyen: null,
    id_tacgia: null,
    trangthai: null,
    id_theloai: null,
    vanan: null,
    anh: null,
  };
  constructor(
    private ct: TruyenService,
    private tl: TheloaiService,
    private fb: FormBuilder,
    private router: Router
  ) {
  
  }

  ngOnInit(): void {
      this.user = JSON.parse(sessionStorage.getItem('user')!) || null;
      this.getTheloai();
  }
  getTheloai(id?: any) {
    this.tl.getTheloai().subscribe((res) => {
      console.log('Danh sách thể loại', res);
      this.theloai = res;
    });
  }
  save() {}
 
  logout(){
    sessionStorage.clear();
    alert("Bạn đã đăng xuất");
    this.user = null;
  }

  onSearch() {
    this.ct.getSearch(this.sreachForm.value.tentruyen).subscribe((res) => {
      this.truyen = res;
    });
  }
}
