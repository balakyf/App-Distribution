import {Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-configurer-sim',
  templateUrl: './configurer-sim.component.html',
  styleUrls: ['./configurer-sim.component.scss']
})
export class ConfigurerSimComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfigurerSimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ result: 0 });
  }
}
