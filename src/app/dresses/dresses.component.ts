import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.css']
})
export class DressesComponent implements OnInit {
 products = products;
  constructor() { }

  ngOnInit() {
  }

}