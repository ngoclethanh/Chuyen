import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruyenComponent } from './truyen/truyen.component';
import { TruyenCreateComponent } from './truyen-create/truyen-create.component';
import { TruyenEditComponent } from './truyen-edit/truyen-edit.component';
import { TheloaiEditComponent } from './theloai-edit/theloai-edit.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { TheloaiCreateComponent } from './theloai-create/theloai-create.component';
import { ChuongtruyenComponent } from './chuongtruyen/chuongtruyen.component';
import { TacgiaComponent } from './tacgia/tacgia.component';
import { DocgiaComponent } from './docgia/docgia.component';
import { DanhgiaComponent } from './danhgia/danhgia.component';
import { ChitietComponent } from './component/chitiet/chitiet.component';
import { TacgiaEditComponent } from './tacgia-edit/tacgia-edit.component';
import { DocgiaEditComponent } from './docgia-edit/docgia-edit.component';
import { ChuongtruyenEditComponent } from './chuongtruyen-edit/chuongtruyen-edit.component';
import { DanhgiaEditComponent } from './danhgia-edit/danhgia-edit.component';
import { ChuongtruyenCreateComponent } from './chuongtruyen-create/chuongtruyen-create.component';
import { DanhgiaCreateComponent } from './danhgia-create/danhgia-create.component';
import { DocgiaCreateComponent } from './docgia-create/docgia-create.component';
import { TacgiaCreateComponent } from './tacgia-create/tacgia-create.component';
import { ThuvienComponent } from './component/thuvien/thuvien.component';
import { DoctruyenComponent } from './component/doctruyen/doctruyen.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DangkyComponent } from './component/dangky/dangky.component';
import { DangnhapComponent } from './component/dangnhap/dangnhap.component';
import { DangtruyenComponent } from './component/dangtruyen/dangtruyen.component';
import { BinhluanComponent } from './component/binhluan/binhluan.component';
import { DangnhapDocgiaComponent } from './component/dangnhap-docgia/dangnhap-docgia.component';
import { DangnhapAdminComponent } from './dangnhap-admin/dangnhap-admin.component';
import { AdminComponent } from './admin/admin.component';
import { TruyentheotacgiaComponent } from './component/truyentheotacgia/truyentheotacgia.component';
import { TaochuongComponent } from './component/taochuong/taochuong.component';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruyenComponent,
    TruyenCreateComponent,
    TruyenEditComponent,
    TheloaiEditComponent,
    TheloaiComponent,
    TheloaiCreateComponent,
    ChuongtruyenComponent,
    TacgiaComponent,
    DocgiaComponent,
    DanhgiaComponent,
    ChitietComponent,
    TacgiaEditComponent,
    DocgiaEditComponent,
    ChuongtruyenEditComponent,
    DanhgiaEditComponent,
    ChuongtruyenCreateComponent,
    DanhgiaCreateComponent,
    DocgiaCreateComponent,
    TacgiaCreateComponent,
    ThuvienComponent,
    DoctruyenComponent,
    DangkyComponent,
    DangnhapComponent,
    DangtruyenComponent,
    BinhluanComponent,
    DangnhapDocgiaComponent,
    DangnhapAdminComponent,
    AdminComponent,
    TruyentheotacgiaComponent,
    TaochuongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
   // MatSliderModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
    //Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
