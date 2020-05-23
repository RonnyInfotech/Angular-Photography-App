import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FourColumnGalleryComponent } from './four-column-gallery/four-column-gallery.component';
import { TwoColumnGalleryComponent } from './two-column-gallery/two-column-gallery.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FourColumnGalleryComponent,
    TwoColumnGalleryComponent,
    PhotoDetailsComponent,
    PhotoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
