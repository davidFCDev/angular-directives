import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-estruc',
  templateUrl: './ejemplo-estruc.component.html',
  styleUrls: ['./ejemplo-estruc.component.scss']
})
export class EjemploEstrucComponent implements OnInit {

  rol: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarRol() {
    this.rol = !this.rol;
  }
  
}
