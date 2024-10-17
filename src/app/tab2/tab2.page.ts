import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Operario } from '../interfaces/operario';
import { OperarioService } from '../operarioservice';
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
  operario: Operario ={
    legajo:'',
    nombre:'',
    puesto:'',
    linea:'',
  }

  constructor(
    // private formBuilder: FormBuilder,
    private operarioservice:OperarioService,
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
    this.activateroute.params.pipe(switchMap(({id})=>this.operarioservice.getOperarioPorId(id))
  ).subscribe(operario =>this.operario=operario);


  }
  onSubmit() {
    if (this.operario.nombre.trim().length===0){
      return
    }
    // actualizar
    if (this.operario.id){
      this.operarioservice.actualizarOperario( this.operario )
        .subscribe( operario => console.log ( 'actualizando', operario ))
        this.router.navigate(['tabs/tab1']); 
    }else{
      this.operarioservice.agregarOperario(this.operario)
      .subscribe(resp=>{
        console.log('respuesta',resp);
        this.router.navigate(['tabs/tab1']); 
      })
    }
  }

  borrar() {
    if (!this.operario.id) {
      return; // No hay cliente para eliminar
    }
    else{

      this.operarioservice.eliminarOperario(this.operario.id!)
      .subscribe(resp => {
        console.log('afiliado eliminado', resp);
        console.log(`Eliminando afiliado con ID: ${this.operario.id}`);

        this.router.navigate(['tabs/tab1']); // Redirigir después de eliminar
      }, error => {
        console.error('Error al eliminar el cliente', error);
      });
    }
  }
  
     
  }

