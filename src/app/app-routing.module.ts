import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'marcas', component: MarcasComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'contacto', component: ContactoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
