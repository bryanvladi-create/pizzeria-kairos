import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-footer.component.html',
})
export class LocationFooterComponent {
  schedule = [
    { day: 'Lunes – Jueves', hours: '11:00 am – 08:00 pm' },
    { day: 'Viernes – Sábado', hours: '02:00 pm – 08:00 pm' },
    { day: 'Domingo', hours: '11:00 am – 06:00 pm' },
  ];

  socialLinks = [
    { icon: '📘', label: 'Facebook', url: '#' },
    { icon: '📸', label: 'Instagram', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' },
    { icon: '▶️', label: 'TikTok', url: '#' },
  ];

  year = new Date().getFullYear();
}
