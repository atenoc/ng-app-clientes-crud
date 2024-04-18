import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';  //Para comunicarnos el el servidor Backend
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string ="http://localhost:8080/api/clientes"; //urlEndPoint del servidor de Spring

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http : HttpClient) { }

  /*Método que obtiene todos los clientes*/
  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);  //retornaba la lista estatica
    return this.http.get(this.urlEndPoint).pipe(
      //funcion flecha
      map (response => response as Cliente[])   //Tomamos el formato json y lo casteamos un arreglo de tipo Cliente
    )
  }

  /*Metodo para agregar cliente*/
  createCliente(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

  /* Obtener 1 cliente */
  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  /* actualizar cliente*/
  updateCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`,cliente, {headers: this.httpHeaders})
  }

  //* elimianr cliente*/
  deleteCliente(id:number):Observable<Cliente>{
    console.log("cabeceras: " + this.httpHeaders)
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
