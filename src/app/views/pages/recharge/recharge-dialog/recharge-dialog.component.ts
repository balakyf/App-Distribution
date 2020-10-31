import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'kt-recharge-dialog',
  templateUrl: './recharge-dialog.component.html',
  styleUrls: ['./recharge-dialog.component.scss']
})
export class RechargeDialogComponent implements OnInit {
  titre ='Recharger';
  butValue='Recharger';

  constructor(public dialogRef: MatDialogRef<RechargeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private route : Router) { }

  ngOnInit(): void {
  }

  close() {
     this.dialogRef.close({ result: 0 });
  }

}
