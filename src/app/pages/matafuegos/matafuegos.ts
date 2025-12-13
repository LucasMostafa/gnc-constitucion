import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matafuegos',
  templateUrl: './matafuegos.html',
  styleUrls: ['./matafuegos.scss']
})
export class Matafuegos implements OnInit {

  features = [
    {
      title: 'Automotor',
      icon: '🚗', // Si usas FontAwesome, cambia esto por la clase 'fa-solid fa-car'
      desc: 'Recarga obligatoria para VTV y seguridad vial. Matafuegos de 1kg con soporte.',
    },
    {
      title: 'Edificios y Comercios',
      icon: '🏢', // Si usas FontAwesome: 'fa-solid fa-building'
      desc: 'Mantenimiento anual para consorcios y locales. Extintores de polvo químico ABC y CO2.',
    },
    {
      title: 'Servicio Express',
      icon: '⚡', // Si usas FontAwesome: 'fa-solid fa-bolt'
      desc: 'Sabemos que no podés parar. Traés tu equipo y realizamos la recarga en el día.',
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Al iniciar, scrolleamos arriba de todo para asegurar la visualización de la transición
    window.scrollTo(0, 0);
  }

}