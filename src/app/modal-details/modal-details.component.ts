import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrl: './modal-details.component.css',
})
export class ModalDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalDetailsComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
