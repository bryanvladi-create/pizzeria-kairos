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
    { day: 'Lunes – Jueves',   hours: '11:00 am – 08:00 pm' },
    { day: 'Viernes – Sábado', hours: '02:00 pm – 08:00 pm' },
    { day: 'Domingo',          hours: '11:00 am – 06:00 pm' },
  ];

  socialLinks = [
    { icon: '📘', label: 'Facebook',  url: '#' },
    { icon: '📸', label: 'Instagram', url: '#' },
    { icon: '▶️', label: 'TikTok',    url: '#' },
  ];

  year = new Date().getFullYear();

  isOpenNow(): boolean {
    const now  = new Date();
    const h    = now.getHours();
    const m    = now.getMinutes();
    const time = h + m / 60;          // e.g. 14.5 = 14:30
    const day  = now.getDay();        // 0=Dom … 6=Sáb

    // Lun–Jue (1–4): 11:00–20:00
    if (day >= 1 && day <= 4) return time >= 11 && time < 20;
    // Vie–Sáb (5–6): 14:00–20:00
    if (day === 5 || day === 6) return time >= 14 && time < 20;
    // Dom (0): 11:00–18:00
    if (day === 0) return time >= 11 && time < 18;
    return false;
  }
}
