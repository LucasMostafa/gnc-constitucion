import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos la estructura de tus datos
interface Servicio {
  titulo: string;
  bajada: string;
  categoria: string;
  imagen: string;
  descripcionLarga: string;
  caracteristicas: string[];
  herramientas?: string;
  precio?: string;
  expandido: boolean;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {

  // CONFIGURACIÓN SCROLL:
  // Altura de tu menú fijo en píxeles. Ajusta este número si sigue tapando un poco.
  readonly NAVBAR_HEIGHT = 70; 

  // Aquí cargas toda tu info real (con tus actualizaciones recientes)
  servicios: Servicio[] = [
    {
      titulo: 'Renovación de Oblea',
      bajada: 'Revisión del vehículo en el momento y oblea en el día.',
      categoria: 'mantenimiento',
      imagen: 'assets/img/servicios/oblea.png',
      descripcionLarga: 'Realizamos la inspección anual obligatoria verificando la integridad del sistema.',
      caracteristicas: ['Revisión de regulador', 'Control de sujeción de cilindro', 'Verificación de equipo en condiciones'],
      precio: '$35.000',
      expandido: false
    },
    {
      titulo: 'Prueba Hidráulica',
      bajada: 'Pruebas hidráulicas certificadas en el día (5 años).',
      categoria: 'mantenimiento',
      imagen: 'assets/img/servicios/pruebahidraulica.png',
      descripcionLarga: 'Desmontaje y prueba de resistencia del cilindro a alta presión para garantizar seguridad. Utilizamos válvulas de cilindro Tomasetto Achille, la mejor calidad del mercado.',
      caracteristicas: ['Desmontaje de válvula', 'Limpieza interna', 'Certificado', 'Valvula de cilindro Tomasetto Achille'],
      herramientas: 'Torquimetro y manometros certificados',
      precio: '$190.000',
      expandido: false
    },
    {
      titulo: 'Calibración Electrónica',
      bajada: 'Optimizamos consumo, arranque y rendimiento.',
      categoria: 'calibracion',
      imagen: 'assets/img/servicios/interfaz-ta.png',
      descripcionLarga: 'Ajuste fino de la curva de avance y mezcla mediante interfaz.',
      caracteristicas: ['Mejora el funcionamiento', 'Elimina tirones', 'Optimiza consumo'],
      herramientas: 'Interfaz Tomasetto Achille + Scanner Multimarca',
      precio: '$35.000',
      expandido: false
    },
    {
      titulo: 'Instalación',
      bajada: 'Convertimos tu vehiculo a GNC.',
      categoria: 'conversion',
      imagen: 'assets/img/servicios/reparacion-gemini.png',
      descripcionLarga: 'Instalación de equipo acorde a lo que tu vehículo necesita.',
      caracteristicas: ['Cilindro', 'Cuna homologada', 'Kit electronico', 'Válvula de carga externa'],
      herramientas: 'Equipos Tomasetto Achille 5ta generación - Equipos TES inyección y carburador',
      expandido: false
    }
  ];

  toggleServicio(index: number) {
    // Opción A: Permite abrir varios a la vez
    this.servicios[index].expandido = !this.servicios[index].expandido;
  }

  // MÉTODO CORREGIDO:
  scrollToContact() {
    const sectionId = 'turnos';
    const el = document.getElementById(sectionId);

    if (el) {
      // 1. Dónde está el elemento relativo a la ventana actual
      const rectTop = el.getBoundingClientRect().top;
      
      // 2. Cuánto scroll lleva la página actualmente
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // 3. Calculamos la posición final RESTANDO la altura del menú
      const y = rectTop + currentScroll - this.NAVBAR_HEIGHT;

      // 4. Movemos la pantalla
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

}