import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'any',
})
export class ArchivioService {
  URL: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key=3abb610b';

  constructor() {}

  public getData(CityName: string): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URL + CityName,
      crossDomain: true,
    });
  }
}
