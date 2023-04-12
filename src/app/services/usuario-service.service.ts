import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private _refresh$=new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }

  constructor(private httpClient: HttpClient) { }
  
  getUsuariosAll():Observable<any[]>{
    return this.httpClient.get<any[]>("http://localhost:8080/persona/listar");
  }

// AGREGAR AL METODO AGREGAR
  // .pipe(
  //   tap(()=>{
  //     this._refresh$.next();
  //   }
  //   )
  // );
  createUsuario(usuario:any):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/persona/save",usuario);
  }

  findUserForEmail(email:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/persona/buscar?email=${email}`);
    
  }


  // inisicarSesion(usuario:any):Observable<any>{
  //   return this.httpClient.post<any>("http://localhost:8080/login",usuario);
  // }
  // recbir y enviar al enpoint login
  login(email:string,password:string):Observable<any>{
      return this.httpClient.post<string>("http://localhost:8080/login",{email,password},{
      observe:'response'  
    }).pipe(map((response:HttpResponse<any>)=>{
      const boby=response.body;
      const headers=response.headers;

      const bearerToken=headers.get('Authorization')!;
      const token=bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);
      return boby;
    }));
  }

  getToken(){
    return localStorage.getItem('token');
  }

  public isLoggedIn(){
    let tokenLogged=localStorage.getItem('token');
    if(tokenLogged==''|| tokenLogged==undefined|| tokenLogged==null){
        return false;
    }else{
      return true;
    }
  }

  public cerrarSesion(){
    localStorage.removeItem ('token');
    localStorage.removeItem('user');
    return true;
  }
  
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
   let userLocal=localStorage.getItem('user')!;
   return JSON.parse(userLocal);
  //  if (userLocal!=null) {
  //     return JSON.parse(userLocal);
  //  }
  //  else{
  //   this.cerrarSesion();
  //   return null;
  //  }
  }

}
