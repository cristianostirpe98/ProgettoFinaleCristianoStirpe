import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiDettagliComponent } from './clienti-dettagli/clienti-dettagli.component';
import { ClientiTableComponent } from './clienti-table/clienti-table.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';

const routes: Routes = [
  { path: 'clienti', component: ClientiTableComponent },
  { path: 'clienti/new', component: NewClienteComponent },
  { path: 'clienti/:id', component: ClientiDettagliComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
