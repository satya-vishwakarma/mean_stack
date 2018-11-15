import { Injectable } from '@angular/core';
import { MatDialog} from '@angular/material';
import { MatConfirmDialogComponent } from '../components/mat-confirm-dialog/mat-confirm-dialog.component';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(  private dialog : MatDialog) { }

  openConfirmDialog() {
    this.dialog.open(MatConfirmDialogComponent , {
      width : '390px',
      disableClose : true ,
    });
  }
}
