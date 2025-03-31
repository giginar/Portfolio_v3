import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  selectedPhoto: any = null;

  photos = [
    { url: 'assets/1.JPG', title: '1' },
    { url: 'assets/2.JPG', title: '2' },
    { url: 'assets/3.JPG', title: '3' },
    { url: 'assets/4.JPG', title: '4' },
    { url: 'assets/5.JPG', title: '5' },
    { url: 'assets/6.JPG', title: '6' },
    { url: 'assets/7.JPG', title: '7' },
    { url: 'assets/8.JPG', title: '8' },
    { url: 'assets/9.JPG', title: '9' }
  ];

  openPhoto(photo: any): void {
    this.selectedPhoto = photo;
  }

  closePhoto(): void {
    this.selectedPhoto = null;
  }
}
