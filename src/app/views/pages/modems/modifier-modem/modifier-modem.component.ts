import {Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-modifier-modem',
  templateUrl: './modifier-modem.component.html',
  styleUrls: ['./modifier-modem.component.scss']
})
export class ModifierModemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModifierModemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ result: 0 });
  }
}
