import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedItem: string = 'Materias'; // Establece el valor predeterminado
  public mostrarComponente: boolean = false;

  constructor(public dialog: MatDialog, private router: Router) {}

  selectItem(item: string) {
    this.selectedItem = item;
  }
  openModal(modal: string) {
    console.log('Modal abierto' + modal);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'nombre_materia' },
    });
  }
  openMaterias() {
    this.router.navigate(['/materias']);
  }
}
