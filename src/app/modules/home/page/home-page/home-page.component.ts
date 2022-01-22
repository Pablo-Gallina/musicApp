import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page', // Etiquta html <app-home-page></app-home-page>
  templateUrl: './home-page.component.html', // Template de este componente
  styleUrls: ['./home-page.component.css'] // Estilos del componente
})
export class HomePageComponent implements OnInit {
  //logica del componente
  constructor() { }

  ngOnInit(): void {
  }

}
