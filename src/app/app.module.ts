import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientiTableComponent } from './clienti-table/clienti-table.component';
import { FooterComponent } from './footer/footer.component';
import { ClientiDettagliComponent } from './clienti-dettagli/clienti-dettagli.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientiTableComponent,
    FooterComponent,
    ClientiDettagliComponent,
    NewClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
