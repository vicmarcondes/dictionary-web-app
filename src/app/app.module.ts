import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './home/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeDirective } from './theme.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    ThemeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
