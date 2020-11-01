import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'kt-popup-edit',
  templateUrl: './popup-edit.component.html',
  styleUrls: ['./popup-edit.component.scss']
})
export class PopupEditComponent implements OnInit {
  titre ='Modifier';
  butValue='Suivant';

  constructor(public dialogRef: MatDialogRef<PopupEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close({ result: 0 });
  }

}
