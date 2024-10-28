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
  puestos: string[] = [
    '19 pulgadas puesto 1a',
    '19 pulgadas puesto 1b',
    '19 pulgadas puesto 2a',
    '19 pulgadas puesto 2b',
    '19 pulgadas puesto 3a',
    '19 pulgadas puesto 3b',
    '19 pulgadas puesto 4a',
    '19 pulgadas puesto 4b',
    '19 pulgadas puesto 5a',
    '19 pulgadas puesto 5b',
    '19 pulgadas puesto 6a',
    '19 pulgadas puesto 6b',
    '19 pulgadas puesto 7a',
    '19 pulgadas puesto 7b',
    '19 pulgadas puesto 8a',
    '19 pulgadas puesto 8b',
    '19 pulgadas puesto 9a',
    '19 pulgadas puesto 9b',
    '19 pulgadas puesto 10a',
    '19 pulgadas puesto 10b',
    '19 pulgadas puesto 11a',
    '19 pulgadas puesto 11b',
    '19 pulgadas puesto 12a',
    '19 pulgadas puesto 12b',
    '19 pulgadas puesto 13a',
    '19 pulgadas puesto 13b',
    '19 pulgadas puesto 14a',
    '19 pulgadas puesto 14b',
    '19 pulgadas puesto 15a',
    '19 pulgadas puesto 15b',
    '19 pulgadas puesto 16a',
    '19 pulgadas puesto 16b',
    '19 pulgadas puesto 17a',
    '19 pulgadas puesto 17b',
    '19 pulgadas puesto 18a',
    '19 pulgadas puesto 18b',
    '19 pulgadas puesto 19a',
    '19 pulgadas puesto 19b',
    '19 pulgadas puesto 20a',
    '19 pulgadas puesto 20b',
    '19 pulgadas test 1 ',
    '19 pulgadas test 2 ',
    '19 pulgadas test 3 ',
    '19 pulgadas test 4 ',
    '19 pulgadas test 5 ',
    '19 pulgadas embalaje 1 ',
    '19 pulgadas embalaje 2',
    '19 pulgadas embalaje 3',
    '19 pulgadas embalaje 4',
    '19 pulgadas embalaje 5',
    '19 pulgadas embalaje 6',
    '19 pulgadas embalaje 7',
    '19 pulgadas embalaje 8',
    '19 pulgadas embalaje 9',
    '19 pulgadas embalaje 10',
    '19 pulgadas embalaje 11',
    '19 pulgadas armado de cajas 1',
    '19 pulgadas armado de cajas 2',
    'reparador'

    
  ];
  

  constructor(
    // private formBuilder: FormBuilder,
    private operarioservice:OperarioService,
    private activateroute: ActivatedRoute,
    private router: Router,
  ) {
    //  // Generar un array con números del 1 al 20 para los puestos
    //  this.puestos = Array.from({ length: 20 }, (_, i) => i + 1);
  }

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
     console.log(this.operario)
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
  validateNumber(event: any) {
    const inputValue = event.target.value;
    
    // Elimina cualquier carácter no numérico.
    event.target.value = inputValue.replace(/[^0-9]/g, '');
  
    // Si detecta caracteres no numéricos, puedes personalizar un mensaje o manejarlo aquí
    if (/[^0-9]/.test(inputValue)) {
      console.log('Se detectaron caracteres no numéricos');
    }
  }
  hasNonLetterChars = false;

  validateLetters(value: string, field: any) {
    const pattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    // Validamos si el valor contiene algo que no sea una letra o un espacio.
    if (!pattern.test(value)) {
      this.hasNonLetterChars = true;
      field.control.setErrors({ pattern: true });
    } else {
      this.hasNonLetterChars = false;
      field.control.setErrors(null); // Limpiamos los errores si todo está bien.
    }
  }

  
  
 

  
     
}

