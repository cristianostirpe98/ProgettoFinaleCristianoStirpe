import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../clienti.service';

@Component({
  selector: 'app-clienti-table',
  templateUrl: './clienti-table.component.html',
  styleUrls: ['./clienti-table.component.css']
})
export class ClientiTableComponent implements OnInit {

clienti: Clienti[] = []

  constructor(
    private clientiService: ClientiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(data => this.clienti = data.content);
  }


  detail(item: Clienti): void {
    
    this.router.navigate(['clienti', item.id])
  }

remove(item: Clienti): void {
 this.clientiService.removeClienti(item)
}
}
