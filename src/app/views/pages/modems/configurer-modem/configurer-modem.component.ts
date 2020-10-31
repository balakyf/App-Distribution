import { Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'kt-configurer-modem',
  templateUrl: './configurer-modem.component.html',
  styleUrls: ['./configurer-modem.component.scss']
})
export class ConfigurerModemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfigurerModemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ result: 0 });
  }
}
