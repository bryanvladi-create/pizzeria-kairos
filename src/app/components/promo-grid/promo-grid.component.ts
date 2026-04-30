import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PizzaSize {
  id: number;
  name: string;
  subtitle: string;
  priceServirse: string;
  priceLlevar: string;
  ingredients: string;
  extraCost: string | null;
  color: string;
  colorBg: string;
  featured?: boolean;
}

@Component({
  selector: 'app-promo-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-grid.component.html',
})
export class PromoGridComponent {
  sizes: PizzaSize[] = [
    {
      id: 1,
      name: 'Kairos Personal',
      subtitle: 'Perfecta para uno',
      priceServirse: '$4.50',
      priceLlevar: '$5.00',
      ingredients: 'Elige 2 ingredientes',
      extraCost: 'Ingrediente extra $1.00',
      color: 'border-orange-500',
      colorBg: 'bg-orange-600',
    },
    {
      id: 2,
      name: 'Kairos Pequeña',
      subtitle: 'Ideal para compartir',
      priceServirse: '$6.50',
      priceLlevar: '$7.00',
      ingredients: 'Elige 2 ingredientes',
      extraCost: null,
      color: 'border-blue-400',
      colorBg: 'bg-blue-600',
    },
    {
      id: 3,
      name: 'Kairos Mediana',
      subtitle: 'El favorito del local',
      priceServirse: '$9.00',
      priceLlevar: '$10.00',
      ingredients: 'Elige 3 ingredientes',
      extraCost: 'Ingrediente extra $2.00',
      color: 'border-purple-500',
      colorBg: 'bg-purple-700',
      featured: true,
    },
    {
      id: 4,
      name: 'Kairos Familiar',
      subtitle: 'Para toda la familia',
      priceServirse: '$11.00',
      priceLlevar: '$12.00',
      ingredients: 'Elige 3 ingredientes',
      extraCost: 'Ingrediente extra $2.00',
      color: 'border-pink-500',
      colorBg: 'bg-pink-700',
    },
    {
      id: 5,
      name: 'Kairos Extra Familiar',
      subtitle: 'La más grande de todas',
      priceServirse: '$13.00',
      priceLlevar: '$14.00',
      ingredients: 'Elige 3 ingredientes',
      extraCost: 'Ingrediente extra $2.00',
      color: 'border-red-500',
      colorBg: 'bg-red-700',
    },
    {
      id: 6,
      name: 'Kairos Margarita',
      subtitle: 'Solo queso — clásica pura',
      priceServirse: '—',
      priceLlevar: '—',
      ingredients: 'Elija la pizza de su preferencia',
      extraCost: null,
      color: 'border-green-500',
      colorBg: 'bg-green-700',
    },
  ];

  ingredients = [
    'Jamón', 'Salami', 'Peperoni', 'Salchicha', 'Tocino',
    'Champiñones', 'Pollo', 'Carne', 'Piña', 'Vegetales',
  ];
}
