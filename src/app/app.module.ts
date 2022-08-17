import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { JoinfastComponent } from './joinfast/joinfast.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoinfastComponent,
    AboutComponent,
    CourseComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
