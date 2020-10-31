import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  nom: string;
  position: number;
  numero: number;
  modem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'kt-annuler-trans',
  templateUrl: './annuler-trans.component.html',
  styleUrls: ['./annuler-trans.component.scss']
})
export class AnnulerTransComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nom', 'numero', 'modem'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
