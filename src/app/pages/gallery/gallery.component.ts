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
  photos = [
    { url: 'assets/P9290674.JPG', title: '1' },
    { url: 'assets/P9290681.JPG', title: '2' },
    { url: 'assets/P9290717.JPG', title: '3' },
    { url: 'assets/P9290873.JPG', title: '4' },
    { url: 'assets/P9290910.JPG', title: '5' }
  ];
}
