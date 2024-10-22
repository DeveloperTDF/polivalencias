import { Component, OnInit } from '@angular/core';
import { OperarioService } from '../operarioservice';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  lista: any[] = [];
  results: any[] = [];

  constructor(private operarioService: OperarioService) {}

  ngOnInit(): void {
    this.operarioService.getOperario().subscribe((lista) => {
      this.lista = lista;
      this.results = lista;
    });
  }

  ionViewWillEnter() {
    this.operarioService.getOperario().subscribe((lista) => {
      this.lista = lista;
      this.results = lista;
    }); // Actualiza la lista de afiliados cada vez que la vista se muestra
  }


  handleInput(event: any) {
    const query: string = (event.detail.value || '').toLowerCase().trim();
  
    // Dividimos la búsqueda en palabras individuales
    const terms: string[] = query.split(' ');
  
    // Filtramos la lista en base a las propiedades 'nombre', 'legajo' y 'puesto' como lista de cadenas
    this.results = this.lista.filter((item: any) => {
      return terms.every((term: string) =>
        item.legajo.toLowerCase().includes(term) ||
        item.nombre.toLowerCase().includes(term) ||
        (item.puesto && Array.isArray(item.puesto) && item.puesto.some((p: string) =>
          p.toLowerCase().includes(term)
        ))
      );
    });
  }
  
}

