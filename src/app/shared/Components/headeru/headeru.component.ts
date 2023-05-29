import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TruyenService } from 'src/app/services/truyen.service';
import { FormBuilder } from '@angular/forms';
import { TheLoai } from 'src/app/models/Theloai';

import { TheloaiService } from 'src/app/services/theloai.service';

@Component({
  selector: 'app-headeru',
  templateUrl: './headeru.component.html',
  styleUrls: ['./headeru.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderuComponent implements OnInit {
  truyen: Array<any> = [];
  theloai: any[] = [];
  sreachForm = this.fb.group({
    tentruyen: '',

  });
  constructor(private ct: TruyenService, private tl: TheloaiService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.getTheloai();
  }
  getTheloai(id?: any) {
    this.tl.getTheloai().subscribe((res) => {
      console.log('Danh sách thể loại', res);
      this.theloai = res;
    });
  }



  onSearch() {

    this.ct.getSearch(this.sreachForm.value.tentruyen).subscribe(res => {
      this.truyen = res;
    })
  }
}



