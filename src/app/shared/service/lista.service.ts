import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  apiUrl = 'http://127.0.0.1:8000/api/motorista';

  list() {
    throw new Error('Method not implemented.');
  }

  constructor(private HttpClient: HttpClient) {}

  getLista() {
    return this.HttpClient.get<any>(this.apiUrl + `/show`);
  }

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  insertLista(motorista: any): Observable<any> {
    return this.HttpClient.post<any>(
      this.apiUrl + `/novo`,
      motorista,
      this.HttpOptions
    );
  }

  // ainda não está pronto
  editLista(id: number): Observable<any> {
    return this.HttpClient.get<any>(this.apiUrl + `/edit/{id}` + id);
  }

  // ainda não está pronto
  // removeLista(id: number): Observable<any>{
  //return this.HttpClient.delete<any>(`${this.apiUrl} + /edit/?id=${id}`)
  //}
}
