import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../clienti.service';

@Component({
  selector: 'app-clienti-dettagli',
  templateUrl: './clienti-dettagli.component.html',
  styleUrls: ['./clienti-dettagli.component.css']
})
export class ClientiDettagliComponent implements OnInit {
 
  clienti: Clienti = new Clienti();

  constructor(
    private route: ActivatedRoute,
    private clientiService: ClientiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getClientibyId(params['id']).subscribe((clienti: Clienti) =>{
        this.clienti = clienti;
      })
    })
  }

}
