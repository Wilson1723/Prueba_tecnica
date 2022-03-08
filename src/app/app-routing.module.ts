import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-books', pathMatch: 'full' },
  { path: 'list-books', component: ListEmpleadosComponent },
  { path: 'create-book', component: CreateEmpleadoComponent },
  { path: 'editBook/:id', component: CreateEmpleadoComponent },
  { path: '**', redirectTo: 'list-books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
