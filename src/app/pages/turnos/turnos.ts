import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// 1. IMPORTANTE: Importar la librería aquí
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-turnos',
  imports: [FormsModule],
  templateUrl: './turnos.html',
  styleUrl: './turnos.scss',
})
export class Turnos {

  // 2. Dejé un solo método onSubmit (el que tiene la lógica de EmailJS)
  async onSubmit(e: Event) {
    e.preventDefault(); 
    
    try {
      const result = await emailjs.sendForm(
        'service_1pbrybo',   // Reemplazar con tu Service ID real
        'template_p9o27ht',  // Reemplazar con tu Template ID real
        e.target as HTMLFormElement,
        'uewdIdyVjwLAubU1Q'    // Reemplazar con tu Public Key real
      );

      console.log('ENVIADO!', result.text);
      alert('¡Mensaje enviado con éxito!');
      
      // Reseteamos el formulario visualmente
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.log('FALLÓ...', error);
      alert('Hubo un error al enviar el mensaje, intenta por WhatsApp.');
    }
  }
}