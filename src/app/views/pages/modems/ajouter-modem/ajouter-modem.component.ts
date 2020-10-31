import { Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'kt-ajouter-modem',
  templateUrl: './ajouter-modem.component.html',
  styleUrls: ['./ajouter-modem.component.scss']
})
export class AjouterModemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouterModemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ result: 0 });
  }
}
