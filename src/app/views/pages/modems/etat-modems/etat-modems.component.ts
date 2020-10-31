import { Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-etat-modems',
  templateUrl: './etat-modems.component.html',
  styleUrls: ['./etat-modems.component.scss']
})
export class EtatModemsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EtatModemsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ result: 0 });
  }
}
