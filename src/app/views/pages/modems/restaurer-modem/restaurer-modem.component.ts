import {Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-restaurer-modem',
  templateUrl: './restaurer-modem.component.html',
  styleUrls: ['./restaurer-modem.component.scss']
})
export class RestaurerModemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RestaurerModemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ result: 0 });
  }
}
