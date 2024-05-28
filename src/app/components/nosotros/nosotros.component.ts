import { Component } from '@angular/core';
import { Titulos } from '../objetos/titulos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})

export class NosotrosComponent {
  titulos: Titulos[]=[
    {titulo:'Equipo', image:'nosotros.jpg'},
    {titulo:'Almacén', image:'entrada.jpg'},
    {titulo:'Tienda', image:'bodega.jpg'},
  ];
}
