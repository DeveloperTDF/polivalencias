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
    return this.http.get<any[]>('https://fapesa.pythonanywhere.com/operarios/')
  }
  getOperarioPorId(id:string):Observable<Operario>{
    return this.http.get<Operario>( `https://fapesa.pythonanywhere.com/operarios/${ id }`);
  }
  agregarOperario(operario: Operario):Observable<Operario>{
    return this.http.post<Operario>('https://fapesa.pythonanywhere.com/operarios/',operario );
  }
  actualizarOperario(operario: Operario):Observable<Operario>{
    return this.http.put<Operario>(`https://fapesa.pythonanywhere.com/operarios/${operario.id}`,operario );
  }
  eliminarOperario(id: string):Observable<any>{
    return this.http.delete<any>(`https://fapesa.pythonanywhere.com/operarios/${id}` );
  }


}
