import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Afiliado } from '../interfaces/afiliado';
import { AfiliadoServService } from '../afiliado-serv.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  // formulario!: FormGroup;

  // esto es lo que estoy agregando
  afiliado: Afiliado ={
    fecha:'',
    nombre:'',
    direccion: '',
    telefono: '',
  }

  constructor(
    // private formBuilder: FormBuilder,
    private afiliadoservice:AfiliadoServService,
    private activateroute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // this.formulario = this.formBuilder.group({
    //   fecha: ['', [Validators.required]],
    //   nombre: ['', [Validators.required, Validators.minLength(3)]],
    //   direccion: ['', [Validators.required, Validators.minLength(10)]],
    //   telefono: ['', [Validators.required, Validators.minLength(10)]],
    // });
    // esto estoy agregando codigo del backup
    this.activateroute.params.pipe(switchMap(({id})=>this.afiliadoservice.getAfiliadoPorId(id))
  ).subscribe(afiliado =>this.afiliado=afiliado);


  }
  onSubmit() {
    if (this.afiliado.nombre.trim().length===0){
      return
    }
    // actualizar
    if (this.afiliado.id){
      this.afiliadoservice.actualizarAfiliado( this.afiliado )
        .subscribe( afiliado => console.log ( 'actualizando', afiliado ))
        this.router.navigate(['tabs/tab1']); 
    }else{
      this.afiliadoservice.agregarAfiliado(this.afiliado)
      .subscribe(resp=>{
        console.log('respuesta',resp);
        this.router.navigate(['tabs/tab1']); 
      })
    }
  }

  borrar() {
    if (!this.afiliado.id) {
      return; // No hay cliente para eliminar
    }
    else{

      this.afiliadoservice.eliminarAfiliado(this.afiliado.id!)
      .subscribe(resp => {
        console.log('afiliado eliminado', resp);
        console.log(`Eliminando afiliado con ID: ${this.afiliado.id}`);

        this.router.navigate(['tabs/tab1']); // Redirigir después de eliminar
      }, error => {
        console.error('Error al eliminar el cliente', error);
      });
    }
  }
  
      // crear
      // if (this.formulario.valid) {
      //   const { fecha, nombre, direccion, telefono } = this.formulario.value;
  
      //   // Crea un objeto con los datos del formulario
      //   const nuevoAfiliado: Afiliado = {
      //     fecha,
      //     nombre,
      //     direccion,
      //     telefono,
      //   };
      // this.afiliadoservice.agregarAfiliado(nuevoAfiliado)
      //   .subscribe(resp=>{
      //     console.log('respuesta',resp);
      //     this.router.navigate(['afiliado/listado']); 
      // })
    // if (this.formulario.valid) {
    //   const { fecha, nombre, direccion, telefono } = this.formulario.value;
    //   console.log('fecha:', fecha);
    //   console.log('nombre:', nombre);
    //   console.log('direccion:', direccion);
    //   console.log('telefono: ', telefono);

    //   // Aquí puedes implementar la lógica para iniciar sesión
    // } else {
    //   console.log('Formulario inválido');
    // }
  }

