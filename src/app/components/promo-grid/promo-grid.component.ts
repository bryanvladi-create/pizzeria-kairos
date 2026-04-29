import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Promo {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  badge: string;
  badgeColor: string;
  price: string;
  oldPrice: string;
  image: string;
  expires: string;
  featured?: boolean;
}

@Component({
  selector: 'app-promo-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-grid.component.html',
})
export class PromoGridComponent {
  promos: Promo[] = [
    {
      id: 1,
      title: '2x1 en Pizzas Grandes',
      subtitle: 'Toda la semana solo en pedidos en línea',
      discount: '50% OFF',
      badge: '🔥 Más Popular',
      badgeColor: 'bg-red-600',
      price: '$18.99',
      oldPrice: '$37.98',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop',
      expires: 'Válido hasta el domingo',
      featured: true,
    },
    {
      id: 2,
      title: 'Combo Familiar',
      subtitle: '2 pizzas medianas + entradas + bebidas',
      discount: '30% OFF',
      badge: '👨‍👩‍👧 Familia',
      badgeColor: 'bg-orange-600',
      price: '$29.99',
      oldPrice: '$42.99',
      image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&auto=format&fit=crop',
      expires: 'Fines de semana',
    },
    {
      id: 3,
      title: 'Pizza + Bebida',
      subtitle: 'Cualquier pizza personal con tu bebida favorita',
      discount: '25% OFF',
      badge: '⚡ Flash Deal',
      badgeColor: 'bg-yellow-600',
      price: '$12.99',
      oldPrice: '$17.49',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop',
      expires: 'Solo hoy hasta las 10pm',
    },
    {
      id: 4,
      title: 'Pizza Gourmet',
      subtitle: 'Trufa negra, rúcula y queso de cabra premium',
      discount: 'Nuevo',
      badge: '✨ Premium',
      badgeColor: 'bg-purple-600',
      price: '$22.99',
      oldPrice: '$22.99',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&auto=format&fit=crop',
      expires: 'Disponible siempre',
    },
  ];
}
