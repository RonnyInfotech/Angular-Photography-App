import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FourColumnGalleryComponent } from './four-column-gallery/four-column-gallery.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { TwoColumnGalleryComponent } from './two-column-gallery/two-column-gallery.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'four-column-gallery', component: FourColumnGalleryComponent },
  { path: 'two-column-gallery', component: TwoColumnGalleryComponent },
  { path: 'photo-details', component: PhotoDetailsComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
