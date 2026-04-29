import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { PromoGridComponent } from './components/promo-grid/promo-grid.component';
import { MenuPreviewComponent } from './components/menu-preview/menu-preview.component';
import { LocationFooterComponent } from './components/location-footer/location-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HeroComponent,
    PromoGridComponent,
    MenuPreviewComponent,
    LocationFooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
