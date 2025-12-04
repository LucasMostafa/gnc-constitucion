// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Servicios } from "../servicios/servicios";
import { Turnos } from "../turnos/turnos";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [Servicios, Turnos]
})
export class Home implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}


