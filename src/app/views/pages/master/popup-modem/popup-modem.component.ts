import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-popup-modem',
  templateUrl: './popup-modem.component.html',
  styleUrls: ['./popup-modem.component.scss']
})
export class PopupModemComponent implements OnInit {
  titre ='Verification du Modem';
  butValue='Verifier';
  constructor(public dialogRef: MatDialogRef<PopupModemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ result: 0 });
  }

}
