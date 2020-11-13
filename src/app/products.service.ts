import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Products } from './products';


@Injectable()
export class ProductsService {
  private productUrl = 'api/product';  // URL to web api


  constructor(private http: HttpClient,
  private messageService: MessageService) { }

getProduct(): Observable<Products> {
  return this.http.get<Products>(this.productUrl)
    .pipe(
      catchError(this.handleError<Products>('getProduct', []))
    );
}

 /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProductsService: ${message}`);
  }
  }