import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonInput } from '@ionic/angular';

interface Curso {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CoursesPage {

  cursos: Curso[] = [
    { id: 1, nombre: 'Curso de Ionic' },
    { id: 2, nombre: 'Curso de Angular' },
    { id: 3, nombre: 'Curso de JavaScript' },
    
  ];

  filteredCursos: Curso[] = [];

  constructor() {}

  onSearch(event: any) {
    const searchTerm = event.target.value || '';
  
    this.filteredCursos = this.cursos.filter(curso =>
      curso.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
}