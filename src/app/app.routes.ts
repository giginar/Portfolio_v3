import { Routes } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
  { path: '', redirectTo: 'career', pathMatch: 'full' },
  { path: 'career', component: CareerComponent },
  { path: 'gallery', component: GalleryComponent },
];