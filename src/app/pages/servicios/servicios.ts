import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos la estructura de tus datos
interface Servicio {
  titulo: string;
  bajada: string; // Texto corto
  categoria: string;
  imagen: string; // URL de la foto específica
  // Datos extendidos
  descripcionLarga: string;
  caracteristicas: string[];
  herramientas?: string;
  precio?: string; // Opcional
  expandido: boolean; // Para controlar si se muestra o no
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html', // Ojo: en versiones nuevas suele ser .component.html
  styleUrl: './servicios.scss',
})
export class Servicios {

  // Aquí cargas toda tu info real
  servicios: Servicio[] = [
    {
      titulo: 'Renovación de Oblea',
      bajada: 'Revisión del vehículo en el momento y oblea en el día.',
      categoria: 'mantenimiento',
      imagen: 'assets/img/servicios/oblea.jpg', // Pon tus fotos aquí
      descripcionLarga: 'Realizamos la inspección anual obligatoria verificando la integridad del sistema.',
      caracteristicas: ['Revisión de regulador', 'Control de sujeción de cilindro', 'Verificación de equipo en condiciones'],
      precio: '$35.000',
      expandido: false
    },
    {
      titulo: 'Prueba Hidráulica',
      bajada: 'Pruebas hidráulicas certificadas en el día (5 años).',
      categoria: 'mantenimiento',
      imagen: 'assets/img/servicios/ph.jpg',
      descripcionLarga: 'Desmontaje y prueba de resistencia del cilindro a alta presión para garantizar seguridad.',
      caracteristicas: ['Desmontaje de válvula', 'Limpieza interna', 'Certificado ENARGAS'],
      herramientas: 'Banco de pruebas hidráulicas certificado',
      expandido: false
    },
    // ... Agrega el resto de tus servicios aquí
    {
      titulo: 'Calibración Electrónica',
      bajada: 'Optimizamos consumo, arranque y rendimiento.',
      categoria: 'calibracion',
      imagen: 'assets/img/servicios/interfaz-ta.png',
      descripcionLarga: 'Ajuste fino de la curva de avance y mezcla mediante interfaz.',
      caracteristicas: ['Mejora el funcionamiento', 'Elimina tirones', 'Optimiza consumo'],
      herramientas: 'Interfaz Tomasetto Achille + Scanner Multimarca',
      expandido: false
    }
  ];

  toggleServicio(index: number) {
    // Opción A: Permite abrir varios a la vez
    this.servicios[index].expandido = !this.servicios[index].expandido;

    // Opción B: Si quieres que al abrir uno se cierren los demás (efecto acordeón estricto), usa esto:
    /*
    this.servicios.forEach((s, i) => {
      if (i !== index) s.expandido = false;
    });
    this.servicios[index].expandido = !this.servicios[index].expandido;
    */
  }

  scrollToContact() {
    // Busca el elemento por ID y scrollea suave
    const element = document.getElementById('turnos-title'); // Asegúrate que tu componente de turnos tenga este ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}