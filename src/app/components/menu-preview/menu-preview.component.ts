import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Category = 'Todos' | 'Pizzas' | 'Entradas' | 'Bebidas';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Exclude<Category, 'Todos'>;
  image: string;
  tags: string[];
  popular?: boolean;
}

@Component({
  selector: 'app-menu-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-preview.component.html',
})
export class MenuPreviewComponent {
  categories: Category[] = ['Todos', 'Pizzas', 'Entradas', 'Bebidas'];
  activeCategory = signal<Category>('Todos');

  items: MenuItem[] = [
    { id: 1, name: 'Margherita Clásica', description: 'Salsa de tomate, mozzarella fresca y albahaca italiana', price: '$14.99', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop', tags: ['Vegetariana', 'Clásica'], popular: true },
    { id: 2, name: 'Pepperoni Supreme', description: 'Doble pepperoni, queso cheddar y jalapeños', price: '$17.99', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop', tags: ['Picante', 'Popular'] },
    { id: 3, name: 'BBQ Smoky Chicken', description: 'Pollo ahumado, cebolla caramelizada y salsa BBQ', price: '$18.99', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop', tags: ['Pollo', 'BBQ'], popular: true },
    { id: 4, name: 'Cuatro Quesos', description: 'Mozzarella, gorgonzola, parmesano y brie', price: '$19.99', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop', tags: ['Premium', 'Queso'] },
    { id: 5, name: 'Alitas Buffalo', description: 'Alitas crujientes en salsa buffalo con aderezo ranch', price: '$10.99', category: 'Entradas', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&auto=format&fit=crop', tags: ['Picante', 'Snack'], popular: true },
    { id: 6, name: 'Palitos de Ajo', description: 'Pan artesanal con mantequilla de ajo y hierbas', price: '$6.99', category: 'Entradas', image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&auto=format&fit=crop', tags: ['Vegetariano'] },
    { id: 7, name: 'Coca-Cola', description: 'Lata 355ml bien helada', price: '$2.99', category: 'Bebidas', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&auto=format&fit=crop', tags: ['Clásica'] },
    { id: 8, name: 'Limonada Natural', description: 'Limones frescos, menta y azúcar de caña', price: '$4.99', category: 'Bebidas', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&auto=format&fit=crop', tags: ['Natural', 'Fresca'] },
  ];

  filteredItems = computed(() => {
    const cat = this.activeCategory();
    return cat === 'Todos' ? this.items : this.items.filter(i => i.category === cat);
  });

  setCategory(cat: Category) {
    this.activeCategory.set(cat);
  }
}
