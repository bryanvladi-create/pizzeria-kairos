import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Category = 'Todos' | 'Pizzas' | 'Extras' | 'Bebidas';

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
  categories: Category[] = ['Todos', 'Pizzas', 'Extras', 'Bebidas'];
  activeCategory = signal<Category>('Todos');

  items: MenuItem[] = [
    // Pizzas por ingrediente destacado
    { id: 1, name: 'Pizza Peperoni', description: 'Salsa de tomate, mozzarella y abundante peperoni en cada bocado', price: 'Desde $4.50', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&auto=format&fit=crop', tags: ['Popular', 'Clásica'], popular: true },
    { id: 2, name: 'Pizza Jamón', description: 'Jamón seleccionado sobre base de queso derretido', price: 'Desde $4.50', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop', tags: ['Popular', 'Clásica'], popular: true },
    { id: 3, name: 'Pizza Pollo', description: 'Pollo tierno con queso, perfecto para toda ocasión', price: 'Desde $4.50', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop', tags: ['Pollo'], popular: false },
    { id: 4, name: 'Pizza Tocino', description: 'Tocino crujiente con queso fundido — irresistible', price: 'Desde $4.50', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop', tags: ['Tocino'] },
    { id: 5, name: 'Pizza Vegetales', description: 'Mix de vegetales frescos sobre base de tomate y queso', price: 'Desde $4.50', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&auto=format&fit=crop', tags: ['Vegetariana'] },
    { id: 6, name: 'Pizza Chocolate', description: 'Cubierta con crema de cacao', price: 'Desde $4.50', category: 'Pizzas', image: 'images/pizza-chocolate.png', tags: ['Solo queso', 'Clásica'] },
    { id: 7, name: 'Pizza Hawaiana', description: 'Salsa de tomate,mozzarella y coronada con trozos de piña', price: 'Desde $4.50', category: 'Pizzas', image: 'images/pizza-hawaiana.png', tags: ['Solo queso', 'Clásica'] },
    { id: 8, name: 'Kairos Margarita', description: 'Solo queso — la clásica pura de siempre', price: 'Precio preferencia', category: 'Pizzas', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop', tags: ['Solo queso', 'Clásica'] },

    // Extras
    { id: 9, name: 'Curti Papa', description: 'Papas fritas crujientes al estilo Kairos', price: '$0.50', category: 'Extras', image: 'images/curti-papa.png', tags: ['Snack', 'Popular'], popular: true },
    { id: 10, name: 'Mini Hamburguesa', description: 'Mini hamburguesa perfecta para acompañar tu pizza', price: '$0.50', category: 'Extras', image: 'images/mini-hamburguesa.png', tags: ['Snack'] },
    { id: 8, name: 'Revanadas de Pizza', description: 'Rebanadas de pizza jamon, jamon con peperoni y hawaiana', price: '$0.50', category: 'Pizzas', image: 'images/revanadas.png', tags: ['Solo queso', 'Clásica'] },
    // Bebidas
    { id: 11, name: 'Vaso de Cola', description: 'Refresco en vaso pequeño bien frío', price: '$0.10', category: 'Bebidas', image: 'images/vaso de cola.png', tags: ['Refresco'] },
    { id: 12, name: 'Minicola', description: 'Refresco mini, el complemento perfecto', price: '$0.25', category: 'Bebidas', image: 'images/minicola.png', tags: ['Refresco'] },
    { id: 13, name: 'Cola Personal', description: 'Botella personal para acompañar tu pedido', price: '$0.50', category: 'Bebidas', image: 'images/cola personal.png', tags: ['Personal'] },
    { id: 14, name: 'Cola 1 Litro', description: 'Cola de un litro, ideal para compartir', price: '$1.00', category: 'Bebidas', image: 'images/cola 1 litro.png', tags: ['Familiar'], popular: true },
  ];

  filteredItems = computed(() => {
    const cat = this.activeCategory();
    return cat === 'Todos' ? this.items : this.items.filter(i => i.category === cat);
  });

  setCategory(cat: Category) {
    this.activeCategory.set(cat);
  }
}
