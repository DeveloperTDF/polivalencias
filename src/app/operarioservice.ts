import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operario } from './interfaces/operario';

@Injectable({
  providedIn: 'root'
})
export class OperarioService {

  constructor(private http:HttpClient) { }


  getOperario():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/operarios/')
  }
  getOperarioPorId(id:string):Observable<Operario>{
    return this.http.get<Operario>( ` http://127.0.0.1:8000/operarios/${ id }`);
  }
  agregarOperario(operario: Operario):Observable<Operario>{
    return this.http.post<Operario>('http://127.0.0.1:8000/operarios/',operario );
  }
  actualizarOperario(operario: Operario):Observable<Operario>{
    return this.http.put<Operario>(`http://127.0.0.1:8000/operarios/${operario.id}`,operario );
  }
  eliminarOperario(id: string):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/operarios/${id}` );
  }


}
