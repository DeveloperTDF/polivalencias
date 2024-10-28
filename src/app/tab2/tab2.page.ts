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
    '19 reparador',
    '22 pulgadas puesto 1a',
    '22 pulgadas puesto 1b',
    '22 pulgadas puesto 2a',
    '22 pulgadas puesto 2b',
    '22 pulgadas puesto 3a',
    '22 pulgadas puesto 3b',
    '22 pulgadas puesto 4a',
    '22 pulgadas puesto 4b',
    '22 pulgadas puesto 5a',
    '22 pulgadas puesto 5b',
    '22 pulgadas puesto 6a',
    '22 pulgadas puesto 6b',
    '22 pulgadas puesto 7a',
    '22 pulgadas puesto 7b',
    '22 pulgadas puesto 8a',
    '22 pulgadas puesto 8b',
    '22 pulgadas puesto 9a',
    '22 pulgadas puesto 9b',
    '22 pulgadas puesto 10a',
    '22 pulgadas puesto 10b',
    '22 pulgadas puesto 11a',
    '22 pulgadas puesto 11b',
    '22 pulgadas puesto 12a',
    '22 pulgadas puesto 12b',
    '22 pulgadas puesto 13a',
    '22 pulgadas puesto 13b',
    '22 pulgadas puesto 14a',
    '22 pulgadas puesto 14b',
    '22 pulgadas puesto 15a',
    '22 pulgadas puesto 15b',
    '22 pulgadas puesto 16a',
    '22 pulgadas puesto 16b',
    '22 pulgadas puesto 17a',
    '22 pulgadas puesto 17b',
    '22 pulgadas puesto 18a',
    '22 pulgadas puesto 18b',
    '22 pulgadas puesto 19a',
    '22 pulgadas puesto 19b',
    '22 pulgadas puesto 20a',
    '22 pulgadas puesto 20b',
    '22 pulgadas test 1 ',
    '22 pulgadas test 2 ',
    '22 pulgadas test 3 ',
    '22 pulgadas test 4 ',
    '22 pulgadas test 5 ',
    '22 pulgadas embalaje 1 ',
    '22 pulgadas embalaje 2',
    '22 pulgadas embalaje 3',
    '22 pulgadas embalaje 4',
    '22 pulgadas embalaje 5',
    '22 pulgadas embalaje 6',
    '22 pulgadas embalaje 7',
    '22 pulgadas embalaje 8',
    '22 pulgadas embalaje 9',
    '22 pulgadas embalaje 10',
    '22 pulgadas embalaje 11',
    '22 pulgadas armado de cajas 1',
    '22 pulgadas armado de cajas 2',
    '22 reparador',
    '43 pulgadas puesto 1a',
    '43 pulgadas puesto 1b',
    '43 pulgadas puesto 2a',
    '43 pulgadas puesto 2b',
    '43 pulgadas puesto 3a',
    '43 pulgadas puesto 3b',
    '43 pulgadas puesto 4a',
    '43 pulgadas puesto 4b',
    '43 pulgadas puesto 5a',
    '43 pulgadas puesto 5b',
    '43 pulgadas puesto 6a',
    '43 pulgadas puesto 6b',
    '43 pulgadas puesto 7a',
    '43 pulgadas puesto 7b',
    '43 pulgadas puesto 8a',
    '43 pulgadas puesto 8b',
    '43 pulgadas puesto 9a',
    '43 pulgadas puesto 9b',
    '43 pulgadas puesto 10a',
    '43 pulgadas puesto 10b',
    '43 pulgadas puesto 11a',
    '43 pulgadas puesto 11b',
    '43 pulgadas puesto 12a',
    '43 pulgadas puesto 12b',
    '43 pulgadas puesto 13a',
    '43 pulgadas puesto 13b',
    '43 pulgadas puesto 14a',
    '43 pulgadas puesto 14b',
    '43 pulgadas puesto 15a',
    '43 pulgadas puesto 15b',
    '43 pulgadas puesto 16a',
    '43 pulgadas puesto 16b',
    '43 pulgadas puesto 17a',
    '43 pulgadas puesto 17b',
    '43 pulgadas puesto 18a',
    '43 pulgadas puesto 18b',
    '43 pulgadas puesto 19a',
    '43 pulgadas puesto 19b',
    '43 pulgadas puesto 20a',
    '43 pulgadas puesto 20b',
    '43 pulgadas test 1 ',
    '43 pulgadas test 2 ',
    '43 pulgadas test 3 ',
    '43 pulgadas test 4 ',
    '43 pulgadas test 5 ',
    '43 pulgadas embalaje 1 ',
    '43 pulgadas embalaje 2',
    '43 pulgadas embalaje 3',
    '43 pulgadas embalaje 4',
    '43 pulgadas embalaje 5',
    '43 pulgadas embalaje 6',
    '43 pulgadas embalaje 7',
    '43 pulgadas embalaje 8',
    '43 pulgadas embalaje 9',
    '43 pulgadas embalaje 10',
    '43 pulgadas embalaje 11',
    '43 pulgadas armado de cajas 1',
    '43 pulgadas armado de cajas 2',
    '43 reparador',
    '50 pulgadas puesto 1a',
    '50 pulgadas puesto 1b',
    '50 pulgadas puesto 2a',
    '50 pulgadas puesto 2b',
    '50 pulgadas puesto 3a',
    '50 pulgadas puesto 3b',
    '50 pulgadas puesto 4a',
    '50 pulgadas puesto 4b',
    '50 pulgadas puesto 5a',
    '50 pulgadas puesto 5b',
    '50 pulgadas puesto 6a',
    '50 pulgadas puesto 6b',
    '50 pulgadas puesto 7a',
    '50 pulgadas puesto 7b',
    '50 pulgadas puesto 8a',
    '50 pulgadas puesto 8b',
    '50 pulgadas puesto 9a',
    '50 pulgadas puesto 9b',
    '50 pulgadas puesto 10a',
    '50 pulgadas puesto 10b',
    '50 pulgadas puesto 11a',
    '50 pulgadas puesto 11b',
    '50 pulgadas puesto 12a',
    '50 pulgadas puesto 12b',
    '50 pulgadas puesto 13a',
    '50 pulgadas puesto 13b',
    '50 pulgadas puesto 14a',
    '50 pulgadas puesto 14b',
    '50 pulgadas puesto 15a',
    '50 pulgadas puesto 15b',
    '50 pulgadas puesto 16a',
    '50 pulgadas puesto 16b',
    '50 pulgadas puesto 17a',
    '50 pulgadas puesto 17b',
    '50 pulgadas puesto 18a',
    '50 pulgadas puesto 18b',
    '50 pulgadas puesto 19a',
    '50 pulgadas puesto 19b',
    '50 pulgadas puesto 20a',
    '50 pulgadas puesto 20b',
    '50 pulgadas test 1 ',
    '50 pulgadas test 2 ',
    '50 pulgadas test 3 ',
    '50 pulgadas test 4 ',
    '50 pulgadas test 5 ',
    '50 pulgadas embalaje 1 ',
    '50 pulgadas embalaje 2',
    '50 pulgadas embalaje 3',
    '50 pulgadas embalaje 4',
    '50 pulgadas embalaje 5',
    '50 pulgadas embalaje 6',
    '50 pulgadas embalaje 7',
    '50 pulgadas embalaje 8',
    '50 pulgadas embalaje 9',
    '50 pulgadas embalaje 10',
    '50 pulgadas embalaje 11',
    '50 pulgadas armado de cajas 1',
    '50 pulgadas armado de cajas 2',
    '50 reparador',
    '55 pulgadas puesto 1a',
    '55 pulgadas puesto 1b',
    '55 pulgadas puesto 2a',
    '55 pulgadas puesto 2b',
    '55 pulgadas puesto 3a',
    '55 pulgadas puesto 3b',
    '55 pulgadas puesto 4a',
    '55 pulgadas puesto 4b',
    '55 pulgadas puesto 5a',
    '55 pulgadas puesto 5b',
    '55 pulgadas puesto 6a',
    '55 pulgadas puesto 6b',
    '55 pulgadas puesto 7a',
    '55 pulgadas puesto 7b',
    '55 pulgadas puesto 8a',
    '55 pulgadas puesto 8b',
    '55 pulgadas puesto 9a',
    '55 pulgadas puesto 9b',
    '55 pulgadas puesto 10a',
    '55 pulgadas puesto 10b',
    '55 pulgadas puesto 11a',
    '55 pulgadas puesto 11b',
    '55 pulgadas puesto 12a',
    '55 pulgadas puesto 12b',
    '55 pulgadas puesto 13a',
    '55 pulgadas puesto 13b',
    '55 pulgadas puesto 14a',
    '55 pulgadas puesto 14b',
    '55 pulgadas puesto 15a',
    '55 pulgadas puesto 15b',
    '55 pulgadas puesto 16a',
    '55 pulgadas puesto 16b',
    '55 pulgadas puesto 17a',
    '55 pulgadas puesto 17b',
    '55 pulgadas puesto 18a',
    '55 pulgadas puesto 18b',
    '55 pulgadas puesto 19a',
    '55 pulgadas puesto 19b',
    '55 pulgadas puesto 20a',
    '55 pulgadas puesto 20b',
    '55 pulgadas test 1 ',
    '55 pulgadas test 2 ',
    '55 pulgadas test 3 ',
    '55 pulgadas test 4 ',
    '55 pulgadas test 5 ',
    '55 pulgadas embalaje 1 ',
    '55 pulgadas embalaje 2',
    '55 pulgadas embalaje 3',
    '55 pulgadas embalaje 4',
    '55 pulgadas embalaje 5',
    '55 pulgadas embalaje 6',
    '55 pulgadas embalaje 7',
    '55 pulgadas embalaje 8',
    '55 pulgadas embalaje 9',
    '55 pulgadas embalaje 10',
    '55 pulgadas embalaje 11',
    '55 pulgadas armado de cajas 1',
    '55 pulgadas armado de cajas 2',
    '55 reparador',
    '65 pulgadas puesto 1a',
    '65 pulgadas puesto 1b',
    '65 pulgadas puesto 2a',
    '65 pulgadas puesto 2b',
    '65 pulgadas puesto 3a',
    '65 pulgadas puesto 3b',
    '65 pulgadas puesto 4a',
    '65 pulgadas puesto 4b',
    '65 pulgadas puesto 5a',
    '65 pulgadas puesto 5b',
    '65 pulgadas puesto 6a',
    '65 pulgadas puesto 6b',
    '65 pulgadas puesto 7a',
    '65 pulgadas puesto 7b',
    '65 pulgadas puesto 8a',
    '65 pulgadas puesto 8b',
    '65 pulgadas puesto 9a',
    '65 pulgadas puesto 9b',
    '65 pulgadas puesto 10a',
    '65 pulgadas puesto 10b',
    '65 pulgadas puesto 11a',
    '65 pulgadas puesto 11b',
    '65 pulgadas puesto 12a',
    '65 pulgadas puesto 12b',
    '65 pulgadas puesto 13a',
    '65 pulgadas puesto 13b',
    '65 pulgadas puesto 14a',
    '65 pulgadas puesto 14b',
    '65 pulgadas puesto 15a',
    '65 pulgadas puesto 15b',
    '65 pulgadas puesto 16a',
    '65 pulgadas puesto 16b',
    '65 pulgadas puesto 17a',
    '65 pulgadas puesto 17b',
    '65 pulgadas puesto 18a',
    '65 pulgadas puesto 18b',
    '65 pulgadas puesto 19a',
    '65 pulgadas puesto 19b',
    '65 pulgadas puesto 20a',
    '65 pulgadas puesto 20b',
    '65 pulgadas test 1 ',
    '65 pulgadas test 2 ',
    '65 pulgadas test 3 ',
    '65 pulgadas test 4 ',
    '65 pulgadas test 5 ',
    '65 pulgadas embalaje 1 ',
    '65 pulgadas embalaje 2',
    '65 pulgadas embalaje 3',
    '65 pulgadas embalaje 4',
    '65 pulgadas embalaje 5',
    '65 pulgadas embalaje 6',
    '65 pulgadas embalaje 7',
    '65 pulgadas embalaje 8',
    '65 pulgadas embalaje 9',
    '65 pulgadas embalaje 10',
    '65 pulgadas embalaje 11',
    '65 pulgadas armado de cajas 1',
    '65 pulgadas armado de cajas 2',
    '65 reparador',
    '70 pulgadas puesto 1a',
    '70 pulgadas puesto 1b',
    '70 pulgadas puesto 2a',
    '70 pulgadas puesto 2b',
    '70 pulgadas puesto 3a',
    '70 pulgadas puesto 3b',
    '70 pulgadas puesto 4a',
    '70 pulgadas puesto 4b',
    '70 pulgadas puesto 5a',
    '70 pulgadas puesto 5b',
    '70 pulgadas puesto 6a',
    '70 pulgadas puesto 6b',
    '70 pulgadas puesto 7a',
    '70 pulgadas puesto 7b',
    '70 pulgadas puesto 8a',
    '70 pulgadas puesto 8b',
    '70 pulgadas puesto 9a',
    '70 pulgadas puesto 9b',
    '70 pulgadas puesto 10a',
    '70 pulgadas puesto 10b',
    '70 pulgadas puesto 11a',
    '70 pulgadas puesto 11b',
    '70 pulgadas puesto 12a',
    '70 pulgadas puesto 12b',
    '70 pulgadas puesto 13a',
    '70 pulgadas puesto 13b',
    '70 pulgadas puesto 14a',
    '70 pulgadas puesto 14b',
    '70 pulgadas puesto 15a',
    '70 pulgadas puesto 15b',
    '70 pulgadas puesto 16a',
    '70 pulgadas puesto 16b',
    '70 pulgadas puesto 17a',
    '70 pulgadas puesto 17b',
    '70 pulgadas puesto 18a',
    '70 pulgadas puesto 18b',
    '70 pulgadas puesto 19a',
    '70 pulgadas puesto 19b',
    '70 pulgadas puesto 20a',
    '70 pulgadas puesto 20b',
    '70 pulgadas test 1 ',
    '70 pulgadas test 2 ',
    '70 pulgadas test 3 ',
    '70 pulgadas test 4 ',
    '70 pulgadas test 5 ',
    '70 pulgadas embalaje 1 ',
    '70 pulgadas embalaje 2',
    '70 pulgadas embalaje 3',
    '70 pulgadas embalaje 4',
    '70 pulgadas embalaje 5',
    '70 pulgadas embalaje 6',
    '70 pulgadas embalaje 7',
    '70 pulgadas embalaje 8',
    '70 pulgadas embalaje 9',
    '70 pulgadas embalaje 10',
    '70 pulgadas embalaje 11',
    '70 pulgadas armado de cajas 1',
    '70 pulgadas armado de cajas 2',
    '70 reparador',
    '77 pulgadas puesto 1a',
    '77 pulgadas puesto 1b',
    '77 pulgadas puesto 2a',
    '77 pulgadas puesto 2b',
    '77 pulgadas puesto 3a',
    '77 pulgadas puesto 3b',
    '77 pulgadas puesto 4a',
    '77 pulgadas puesto 4b',
    '77 pulgadas puesto 5a',
    '77 pulgadas puesto 5b',
    '77 pulgadas puesto 6a',
    '77 pulgadas puesto 6b',
    '77 pulgadas puesto 7a',
    '77 pulgadas puesto 7b',
    '77 pulgadas puesto 8a',
    '77 pulgadas puesto 8b',
    '77 pulgadas puesto 9a',
    '77 pulgadas puesto 9b',
    '77 pulgadas puesto 10a',
    '77 pulgadas puesto 10b',
    '77 pulgadas puesto 11a',
    '77 pulgadas puesto 11b',
    '77 pulgadas puesto 12a',
    '77 pulgadas puesto 12b',
    '77 pulgadas puesto 13a',
    '77 pulgadas puesto 13b',
    '77 pulgadas puesto 14a',
    '77 pulgadas puesto 14b',
    '77 pulgadas puesto 15a',
    '77 pulgadas puesto 15b',
    '77 pulgadas puesto 16a',
    '77 pulgadas puesto 16b',
    '77 pulgadas puesto 17a',
    '77 pulgadas puesto 17b',
    '77 pulgadas puesto 18a',
    '77 pulgadas puesto 18b',
    '77 pulgadas puesto 19a',
    '77 pulgadas puesto 19b',
    '77 pulgadas puesto 20a',
    '77 pulgadas puesto 20b',
    '77 pulgadas test 1 ',
    '77 pulgadas test 2 ',
    '77 pulgadas test 3 ',
    '77 pulgadas test 4 ',
    '77 pulgadas test 5 ',
    '77 pulgadas embalaje 1 ',
    '77 pulgadas embalaje 2',
    '77 pulgadas embalaje 3',
    '77 pulgadas embalaje 4',
    '77 pulgadas embalaje 5',
    '77 pulgadas embalaje 6',
    '77 pulgadas embalaje 7',
    '77 pulgadas embalaje 8',
    '77 pulgadas embalaje 9',
    '77 pulgadas embalaje 10',
    '77 pulgadas embalaje 11',
    '77 pulgadas armado de cajas 1',
    '77 pulgadas armado de cajas 2',
    '77 reparador',

    
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

