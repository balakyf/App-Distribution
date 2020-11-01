import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupAddComponent } from '../master/popup-add/popup-add.component';
import { PopupDisableComponent } from './popup-disable/popup-disable.component';
import { PopupEditComponent } from './popup-edit/popup-edit.component';
import { PopupModemComponent } from './popup-modem/popup-modem.component';



export interface PeriodicElement {
  nom: string;
  position: number;
  numero: number;
  modem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'kt-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nom', 'numero', 'modem'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupAddComponent,{
        width: '1000px',
        height:'500px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2() {
    const dialogRef = this.dialog.open(PopupEditComponent,{
        width: '1000px',
        height:'600px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog3() {
    const dialogRef = this.dialog.open(PopupDisableComponent,{
        width: ' 800px',
        height:'400px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog4() {
    const dialogRef = this.dialog.open(PopupModemComponent,{
        width: '800px',
        height:'400px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}