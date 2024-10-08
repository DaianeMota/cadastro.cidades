import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table.cidades',
  templateUrl: './table.cidades.component.html',
  styleUrl: './table.cidades.component.css'
})
export class TableCidadesComponent {
  cidades: cidade[] = [
    {
      "id"   : 1,
      "name" : "Xiquexique",
      "state" : "Bahia",
      "Population"  : 50000,
     }
  ]

}

