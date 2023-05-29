import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruyenService } from 'src/app/services/truyen.service';

@Component({
  selector: 'app-thuvien',
  templateUrl: './thuvien.component.html',
  styleUrls: ['./thuvien.component.css']
})
export class ThuvienComponent implements OnInit {
thuvien:any =[];
  constructor(private pd:TruyenService,private _router:Router) { }

  ngOnInit(): void {
    this.thuvien = this.pd.getThuvien();
    console.log(this.thuvien)
  }



RemoveThuvien(index: number){
  if(confirm('Bạn có chắc muốn xóa ?')){
    this.thuvien.splice(index, 1);
    this.pd.saveThuvien(this.thuvien);
   
  }
}
onClear(){
  if(confirm('Bạn có chắc muốn xóa ?')){
    sessionStorage.clear();
    this.thuvien=[];
  }
}

}
