import { Component, OnInit } from '@angular/core';
import { AfiliadoServService } from '../afiliado-serv.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  lista: any[] = [];
  results: any[] = [];

  constructor(private afiliadoService: AfiliadoServService) {}

  ngOnInit(): void {
    this.afiliadoService.getAfiliado().subscribe((lista) => {
      this.lista = lista;
      this.results = lista;
    });
  }

  ionViewWillEnter() {
    this.afiliadoService.getAfiliado().subscribe((lista) => {
      this.lista = lista;
      this.results = lista;
    }); // Actualiza la lista de afiliados cada vez que la vista se muestra
  }


  handleInput(event: any) {
    const query = (event.detail.value || '').toLowerCase();

    // Filtrar la lista en base a las propiedades 'nombre'
    this.results = this.lista.filter((item) =>
      item.nombre.toLowerCase().includes(query)
    );
  }
}

// public results = [...this.lista];
// lista = [
//   { fecha: '2024-01-01', nombre: 'Ejemplo', direccion:'eva perorn 554', telefono:'123456' },
//   { fecha: '2024-01-02', nombre: 'candela', direccion:'rosale 554', telefono:'987654' },
// ];
