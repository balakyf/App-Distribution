import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RechargeDialogComponent } from './recharge-dialog/recharge-dialog.component';


export interface PeriodicElement {
  nom: string;
  position: number;
  numero: number;
  modem: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'kt-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nom', 'numero', 'modem'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RechargeDialogComponent,{
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
