import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Afiliado } from './interfaces/afiliado';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoServService {

  constructor(private http:HttpClient) { }


  getAfiliado():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/afiliados/')
  }
  getAfiliadoPorId(id:string):Observable<Afiliado>{
    return this.http.get<Afiliado>( ` http://127.0.0.1:8000/afiliados/${ id }`);
  }
  agregarAfiliado(afiliado: Afiliado):Observable<Afiliado>{
    return this.http.post<Afiliado>('http://127.0.0.1:8000/afiliados/',afiliado );
  }
  actualizarAfiliado(afiliado: Afiliado):Observable<Afiliado>{
    return this.http.put<Afiliado>(`http://127.0.0.1:8000/afiliados/${afiliado.id}`,afiliado );
  }
  eliminarAfiliado(id: string):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/afiliados/${id}` );
  }


}
