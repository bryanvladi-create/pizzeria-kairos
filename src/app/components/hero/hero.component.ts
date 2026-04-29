import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('700ms cubic-bezier(0.16,1,0.3,1)', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('staggerFade', [
      transition(':enter', [
        query('.anim-child', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(120, [
            animate('600ms cubic-bezier(0.16,1,0.3,1)', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class HeroComponent implements OnInit {
  visible = signal(false);

  badges = ['🔥 Más Vendida', '✨ Ingredientes Frescos', '⚡ Entrega en 30 min'];

  ngOnInit() {
    setTimeout(() => this.visible.set(true), 100);
  }

  scrollToMenu() {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToPromos() {
    document.querySelector('#promos')?.scrollIntoView({ behavior: 'smooth' });
  }
}
