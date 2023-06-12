import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TruyenComponent } from './truyen/truyen.component';
import { TruyenCreateComponent } from './truyen-create/truyen-create.component';
import { TruyenEditComponent } from './truyen-edit/truyen-edit.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { TheloaiEditComponent } from './theloai-edit/theloai-edit.component';
import { ChuongtruyenComponent } from './chuongtruyen/chuongtruyen.component';
import { TacgiaComponent } from './tacgia/tacgia.component';
import { DocgiaComponent } from './docgia/docgia.component';
import { DanhgiaComponent } from './danhgia/danhgia.component';
import { ChitietComponent } from './component/chitiet/chitiet.component';
import { TheloaiCreateComponent } from './theloai-create/theloai-create.component';
import { ChuongtruyenEditComponent } from './chuongtruyen-edit/chuongtruyen-edit.component';
import { TacgiaEditComponent } from './tacgia-edit/tacgia-edit.component';
import { DocgiaEditComponent } from './docgia-edit/docgia-edit.component';
import { DanhgiaEditComponent } from './danhgia-edit/danhgia-edit.component';
import { ChuongtruyenCreateComponent } from './chuongtruyen-create/chuongtruyen-create.component';
import { DocgiaCreateComponent } from './docgia-create/docgia-create.component';
import { DanhgiaCreateComponent } from './danhgia-create/danhgia-create.component';
import { TacgiaCreateComponent } from './tacgia-create/tacgia-create.component';
import { ThuvienComponent } from './component/thuvien/thuvien.component';
import { DoctruyenComponent } from './component/doctruyen/doctruyen.component';
import { DangkyComponent } from './component/dangky/dangky.component';
import { DangnhapComponent } from './component/dangnhap/dangnhap.component';
import { DangtruyenComponent } from './component/dangtruyen/dangtruyen.component';
import { BinhluanComponent } from './component/binhluan/binhluan.component';
import { DangnhapDocgiaComponent } from './component/dangnhap-docgia/dangnhap-docgia.component';
import { DangnhapAdminComponent } from './dangnhap-admin/dangnhap-admin.component';
import { GuardService } from './dangnhap-admin/guard.service';
import { AdminComponent } from './admin/admin.component';
import { TruyentheotacgiaComponent } from './component/truyentheotacgia/truyentheotacgia.component';
import { TaochuongComponent } from './component/taochuong/taochuong.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'chitiet/:id', component: ChitietComponent},
  {path: 'doctruyen/:id', component: DoctruyenComponent},
  {path: 'thuvien', component: ThuvienComponent},
  {path: 'dangky', component: DangkyComponent},
  {path: 'user/dangnhap', component: DangnhapComponent},
  {path: 'user/dangnhapdocgia', component: DangnhapDocgiaComponent},
  {path: 'dangtruyen', component: DangtruyenComponent},
  {path: 'binhluan', component: BinhluanComponent},
  {path: 'taochuong', component: TaochuongComponent},

  {path: 'truyentheotacgia/:id', component: TruyentheotacgiaComponent},

  //ADMIN
  {path: 'truyen', component: TruyenComponent, canActivate: [GuardService],},
  {path: 'truyen/add', component: TruyenCreateComponent},
  {path: 'truyen/edit/:id', component: TruyenEditComponent},
  {path: 'theloai/add', component: TheloaiCreateComponent},
  {path: 'theloai', component: TheloaiComponent, canActivate: [GuardService]},
  {path: 'theloai/edit/:id', component: TheloaiEditComponent},
  {path: 'chuong', component: ChuongtruyenComponent, canActivate: [GuardService]},
  {path: 'tacgia', component: TacgiaComponent, canActivate: [GuardService]},
  {path: 'docgia', component: DocgiaComponent, canActivate: [GuardService]},
  {path: 'danhgia', component: DanhgiaComponent, canActivate: [GuardService]},
  {path: 'chuong/edit/:id', component: ChuongtruyenEditComponent},
  {path: 'docgia/edit/:id', component: DocgiaEditComponent},
  {path: 'danhgia/edit/:id', component: DanhgiaEditComponent},
  {path: 'tacgia/edit/:id', component: TacgiaEditComponent},
  {path: 'chuong/add', component: ChuongtruyenCreateComponent},
  {path: 'docgia/add', component: DocgiaCreateComponent},
  {path: 'danhgia/add', component: DanhgiaCreateComponent},
  {path: 'tacgia/add', component: TacgiaCreateComponent},
  {path: 'dangnhapAdmin', component: DangnhapAdminComponent},
  {path: 'account', component: AdminComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
