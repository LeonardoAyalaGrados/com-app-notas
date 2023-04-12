import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasServiceService {

  constructor(private httpClient:HttpClient) { }

  deleteNotaPorId(id:any):Observable<any>{
      return this.httpClient.delete(`http://localhost:8080/nota/delete/${id}`);
  }

  guardarNota(nota:any):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/nota/save",nota);
  }
}
