import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  selectedItem: string = 'Materias';

  constructor(private router: Router){}

  selectItem(item: string) {
    this.selectedItem = item;
  }
  salirMaterias(){
    this.router.navigate(["/home"])
  }
}

