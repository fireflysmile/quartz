import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { NvD3Module } from 'ngx-nvd3';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { CircleComponent } from './components/circle/circle.component';
import { HeaderComponent } from './components/header/header.component';
import { NumberstylePipe } from './numberstyle.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ReviewComponent } from './page/review/review.component';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { DataService } from './services/data.service'
import { DropdownNoBoderComponent } from './components/dropdown-no-boder/dropdown-no-boder.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HeaderComponent,
    NumberstylePipe,
    FooterComponent,
    HomeComponent,
    ReviewComponent,
    CircleComponent,
    DropdownComponent,
    ClickOutsideDirective,
    DropdownNoBoderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NvD3Module
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
