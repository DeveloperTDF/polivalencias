import { Component, OnInit } from '@angular/core';
import { Afiliado } from '../interfaces/afiliado';
import { HttpClient } from '@angular/common/http';
import { AfiliadoServService } from '../afiliado-serv.service';
import { Trabajo } from '../interfaces/trabajos';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})



export class Tab4Page implements OnInit {
  
  trabajo:Trabajo = {
    fecha     : new Date (),
    turno     : '',
    nombre    : '',    
    tarea     : '',  
  }
  // afiliados = [
  //   { fecha: '2024-01-01', nombre: 'fernanda', tarea:'pegar afiches', estado:'realizado' },
  //   { fecha: '2024-01-02', nombre: 'candela', tarea:'ir a la calle', estado:'realizado' },
  // ];
  afiliadoser:Afiliado[]=[];
  
  constructor(private afiliadoservice:AfiliadoServService) { }

  ngOnInit() {
    this.afiliadoservice.getAfiliado().subscribe((respuesta) =>{
      this.afiliadoser = respuesta;
      console.log(respuesta);
    })
  }

  onSubmit(){
    console.log (this.trabajo);
    
  }

  selectedAfiliados: any[] = [];
  selectedTareas: any[] = [];
}
