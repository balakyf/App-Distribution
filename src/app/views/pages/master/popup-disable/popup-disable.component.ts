import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-popup-disable',
  templateUrl: './popup-disable.component.html',
  styleUrls: ['./popup-disable.component.scss']
})
export class PopupDisableComponent implements OnInit {

  titre ='Desactiver';
  butValue='Desactiver';
  constructor(public dialogRef: MatDialogRef<PopupDisableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ result: 0 });
  }

}
