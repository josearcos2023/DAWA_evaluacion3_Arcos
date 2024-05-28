import { Component } from '@angular/core';
import { Servicios } from '../objetos/servicios';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios: Servicios[]=[
    {titulo:'Ventas', texto:'Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japon. A los mejores precios del mercado.'},
    {titulo:'Asesoría', texto:'Le brindamos una asesoría personalidad acerca de nuestros productos, a elegir el mejor repuesto para su movilidad.'},
    {titulo:'Delivery', texto:'Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible.'},
    {titulo:'Productos', texto:'Contamos con las mejores marcas y calidad de productos del mercado.'},
    ];
}
