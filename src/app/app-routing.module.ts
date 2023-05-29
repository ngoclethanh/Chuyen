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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'chitiet/:id', component: ChitietComponent},
  {path: 'doctruyen/:id', component: DoctruyenComponent},
  {path: 'thuvien', component: ThuvienComponent},
  {path: 'dangky', component: DangkyComponent},


  //ADMIN
  {path: 'truyen', component: TruyenComponent},
  {path: 'truyen/add', component: TruyenCreateComponent},
  {path: 'truyen/edit/:id', component: TruyenEditComponent},
  {path: 'theloai/add', component: TheloaiCreateComponent},
  {path: 'theloai', component: TheloaiComponent},
  {path: 'theloai/edit/:id', component: TheloaiEditComponent},
  {path: 'chuong', component: ChuongtruyenComponent},
  {path: 'tacgia', component: TacgiaComponent},
  {path: 'docgia', component: DocgiaComponent},
  {path: 'danhgia', component: DanhgiaComponent},
  {path: 'chuong/edit/:id', component: ChuongtruyenEditComponent},
  {path: 'docgia/edit/:id', component: DocgiaEditComponent},
  {path: 'danhgia/edit/:id', component: DanhgiaEditComponent},
  {path: 'tacgia/edit/:id', component: TacgiaEditComponent},
  {path: 'chuong/add', component: ChuongtruyenCreateComponent},
  {path: 'docgia/add', component: DocgiaCreateComponent},
  {path: 'danhgia/add', component: DanhgiaCreateComponent},
  {path: 'tacgia/add', component: TacgiaCreateComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
