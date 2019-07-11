import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A2sCommModule } from 'a2s-comm';
import { SpaceModule } from './space/space.module';
import { HttpClientModule } from '@angular/common/http';
import { BlackHoleComponent } from './black-hole/black-hole.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackHoleComponent,
  ],
  imports: [
    BrowserModule,
    A2sCommModule,
    SpaceModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
