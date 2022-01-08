import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    MaterialModule
  ]
})
export class FooterModule { }
