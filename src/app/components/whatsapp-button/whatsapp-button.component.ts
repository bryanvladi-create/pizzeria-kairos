import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CartItem {
  name: string;
  size: string;
  price: string;
  qty: number;
}

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './whatsapp-button.component.html',
})
export class WhatsappButtonComponent {
  // ── Reemplaza con el número real de Kairos ──
  readonly phone = '593999999999';
  readonly consultaUrl = `https://wa.me/593999999999?text=${encodeURIComponent('¡Hola Pizzería Kairos! Quisiera información sobre el menú 🍕')}`;

  isOpen   = signal(false);
  showForm = signal(false);
  sent     = signal(false);

  // Formulario simple
  name    = '';
  address = '';
  notes   = '';

  sizes = [
    { label: 'Personal',      price: '$4.50 / $5.00' },
    { label: 'Pequeña',       price: '$6.50 / $7.00' },
    { label: 'Mediana',       price: '$9.00 / $10.00' },
    { label: 'Familiar',      price: '$11.00 / $12.00' },
    { label: 'Extra Familiar',price: '$13.00 / $14.00' },
    { label: 'Margarita',     price: 'Precio preferencia' },
  ];

  ingredients = [
    'Jamón','Salami','Peperoni','Salchicha','Tocino',
    'Champiñones','Pollo','Carne','Piña','Vegetales',
  ];

  selectedSize        = signal('');
  selectedIngredients = signal<string[]>([]);
  delivery            = signal<'servirse' | 'llevar'>('llevar');

  togglePanel()  { this.isOpen.update(v => !v); this.showForm.set(false); }
  openForm()     { this.showForm.set(true); }

  toggleIngredient(ing: string) {
    const current = this.selectedIngredients();
    if (current.includes(ing)) {
      this.selectedIngredients.set(current.filter(i => i !== ing));
    } else if (current.length < 3) {
      this.selectedIngredients.set([...current, ing]);
    }
  }

  isSelected(ing: string) {
    return this.selectedIngredients().includes(ing);
  }

  sendOrder() {
    const size  = this.selectedSize();
    const ings  = this.selectedIngredients().join(', ') || 'Sin especificar';
    const mode  = this.delivery() === 'llevar' ? 'Para llevar 📦' : 'Para servirse 🍽️';
    const price = this.sizes.find(s => s.label === size)?.price ?? '';

    const msg = encodeURIComponent(
      `🍕 *PEDIDO — Pizzería Kairos*\n\n` +
      `👤 Nombre: ${this.name || 'No indicado'}\n` +
      `📍 Dirección: ${this.address || 'No indicada'}\n` +
      `🍕 Pizza: *${size}* (${price})\n` +
      `🧀 Ingredientes: ${ings}\n` +
      `🛵 Modalidad: ${mode}\n` +
      (this.notes ? `📝 Notas: ${this.notes}\n` : '') +
      `\n¡Muchas gracias! 🙌`
    );

    window.open(`https://wa.me/${this.phone}?text=${msg}`, '_blank');
    this.sent.set(true);
    setTimeout(() => {
      this.sent.set(false);
      this.isOpen.set(false);
      this.showForm.set(false);
      this.name = ''; this.address = ''; this.notes = '';
      this.selectedSize.set('');
      this.selectedIngredients.set([]);
    }, 2000);
  }

  canSend() {
    return this.selectedSize() !== '' && this.selectedIngredients().length > 0;
  }
}
