import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  public numero = 0;
  constructor() {}

  ngOnInit() {}

  incrementar() {
    this.numero++;
  }
}
