import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Promociones', href: '#promos' },
    { label: 'Menú', href: '#menu' },
    { label: 'Ubicación', href: '#location' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.mobileOpen.set(false);
  }
}
