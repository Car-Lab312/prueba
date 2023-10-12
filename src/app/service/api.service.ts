import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://restcountries.com/v3.1/name/chile?fullText=true'; //url de chile
  // private urlApi = 'https://restcountries.com/v3.1/name/argentina?fullText=true'; //url de argentina
  // private urlApi = 'https://restcountries.com/v3.1/name/peru?fullText=true'; //url de peru

  
  constructor( private http: HttpClient ) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
