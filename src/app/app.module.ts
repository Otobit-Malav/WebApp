import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterModule } from './center/center.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './center/home/home.component';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CenterModule,
    FooterModule,
    BrowserAnimationsModule,
    MaterialModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
