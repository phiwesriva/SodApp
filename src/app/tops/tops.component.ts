import { Component, OnInit } from '@angular/core';
import { product } from '../product';


@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
product = product;
}