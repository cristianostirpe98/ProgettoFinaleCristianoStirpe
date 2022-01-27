import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clienti } from './classes/clienti';
import { ClientiData } from './interfaces/clienti-data';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {
 // getClientibyId: any;
  clienti: any;
  getPlanetbyUrl(arg0: any) {
    throw new Error('Method not implemented.');
  }

  urlAPI = 'http://epicode.online/epicodebeservice_v2/'
  tenantID = 'fe_0621'
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNywiZXhwIjoxNjQzOTA1MTI3fQ.EnRko7X8vIdacphkTU9exg1CGC3ha3buCLpUQGPa2IL9nkxaV6utFYM-6gCXsOUi6oVQjfLduh4CUYYDqay4hw'
  headers = new HttpHeaders()

  constructor(private http: HttpClient) {
    this.headers = this.headers
      .set("Authorization", this.bearerToken)
      .set("X-TENANT-ID", this.tenantID)
  }

  getAllClienti() {
    return this.http.get<ClientiData>(this.urlAPI + 'api/clienti?page=0&size=20&sort=id,ASC', { headers: this.headers })
  }

  getClientibyId(id: number) {
    return this.http.get<Clienti>(this.urlAPI + 'api/clienti/' + id);
  }

  addClienti(clienti: Clienti) {
    this.clienti.push(clienti);
  }

  removeClienti(clienti: Clienti) {
    this.clienti.splice(this.clienti.indexOf(clienti))
  }

}

