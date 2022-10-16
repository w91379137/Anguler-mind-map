import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { MindMapComponent } from './page/mind-map/mind-map.component';
import { FrontendAngulerService } from './service/frontend-anguler/frontend-anguler.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MindMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FrontendAngulerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
