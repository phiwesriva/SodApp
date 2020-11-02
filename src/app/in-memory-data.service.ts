import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      //{ id: 11, name: 'Dr Nice' },
      
      {
    name: 'Dress',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Top',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Bottom',
    price: 299,
    description: 'A great phone with one of the best cameras'
  }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(products => products.price)) + 1 : 11;
  }
}