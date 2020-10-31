import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouterModemComponent } from './ajouter-modem/ajouter-modem.component';
import { ConfigurerModemComponent } from './configurer-modem/configurer-modem.component';
import { ConfigurerSimComponent } from './configurer-sim/configurer-sim.component';
import { EtatModemsComponent } from './etat-modems/etat-modems.component';
import { ModifierModemComponent } from './modifier-modem/modifier-modem.component';
import { RestaurerModemComponent } from './restaurer-modem/restaurer-modem.component';

@Component({
  selector: 'kt-modems',
  templateUrl: './modems.component.html',
  styleUrls: ['./modems.component.scss']
})
export class ModemsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }
  onAjouter() {
    const dialogRef = this.dialog.open(AjouterModemComponent,{
        width: '1000px',
        height:'500px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onModifier() {
    const dialogRef = this.dialog.open(ModifierModemComponent,{
        width: '1000px',
        height:'500px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onConfig() {
    const dialogRef = this.dialog.open(ConfigurerModemComponent,{
        width: '1000px',
        height:'500px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onReset() {
    const dialogRef = this.dialog.open(RestaurerModemComponent,{
        width: '1000px',
        height:'500px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onConfig2() {
    const dialogRef = this.dialog.open(ConfigurerSimComponent,{
        width: '1000px',
        height:'500px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onState() {
    const dialogRef = this.dialog.open(EtatModemsComponent,{
        width: '1000px',
        height:'500px',
        disableClose: true,
        panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
