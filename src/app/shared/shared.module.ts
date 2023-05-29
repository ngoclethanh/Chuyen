import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderuComponent } from './Components/headeru/headeru.component';
import { LeftNavComponent } from './Admin/left-nav/left-nav.component';
import { AfooterComponent } from './Admin/afooter/afooter.component';





@NgModule({
  declarations: [
    
    FooterComponent,
    HeaderuComponent,
    LeftNavComponent,
    AfooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderuComponent,
    FooterComponent,
    LeftNavComponent,
    AfooterComponent,

  ]
})
export class SharedModule { }
