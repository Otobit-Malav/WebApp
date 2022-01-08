import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CenterRoutingModule } from './center-routing.module';
import { CenterComponent } from './center.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';



@NgModule({
  declarations: [
    CenterComponent,
    AboutComponent,
    ContactusComponent,
    ServiceComponent,
 
  ],
  imports: [
    CommonModule,
    CenterRoutingModule
  ]
})
export class CenterModule { }
