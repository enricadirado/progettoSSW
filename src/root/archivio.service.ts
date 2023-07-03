//importo un'interfaccia
import { Injectable } from '@angular/core';
//service offre interfaccia che contiene obs
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

//all'interno di quale componente viene fornito
@Injectable({
  providedIn: 'any',
})

//definisco una classe esportata
export class ArchivioService {
  URLGet: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=16c0cb3f';
  URLSet: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/set?key=16c0cb3f';

  constructor() {}

  //funzione per ottenere dal server i dati
  //mi restituisce obs, su cui devo definire next
  //devo dire cosa c'è nell'obs, quindi definisco il generico, la riposta che ottengo tramite ajax 
  //dentro il response ci sono dei dati, non lo definisco e metto any
  //chiama ajax, ottiene l'obs che fornirà l'ajax response, infatti ha solo return
  
  public getData(): Observable<AjaxResponse<any>> {
    //metodo ajax definito in angular
    //la {} recchiude un oggetto che ajax mi richiede per lavorare. oggetto aquisito dal metodo ajax 
    return ajax({
      method: 'GET',
      url: this.URLGet,
      crossDomain: true,
    });
  }
//lo invoco e tratto il risultato come obs

  public setData(nuovoArchivio: string): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'POST',
      url: this.URLSet,
      crossDomain: true,
      body: nuovoArchivio,
    });
  }
}
