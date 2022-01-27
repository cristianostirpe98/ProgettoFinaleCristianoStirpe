import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../clienti.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {



  clienti: Clienti = new Clienti

  constructor(private clientiService: ClientiService,
              private router: Router
    ) { }

  ngOnInit(): void {
  }

  addClienti(item: Clienti): void {
    this.clientiService.addClienti(this.clienti);
    this.clienti = new Clienti();
    this.router.navigate(['clienti', item.id]);
  }


}
