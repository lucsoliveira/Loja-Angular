import { map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

/* Precisamos injetar o HTTP CLient aqui no service */

export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      //se for error, acrescenta a classe error, caso contrário a de sucesso
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  // inserir la no backend um novo produto A PARTIR DO MODEL "Product"
  create(product: Product): Observable<Product> {

    //esse post retorna um Observable do tipo Produto
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );

  }

  errorHandler(e: any): Observable<any> {

    this.showMessage('Ocorreu um erro!', true)

    return EMPTY

  }

  //get dos produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // ler por Id
  readById(id: number): Observable<Product> {

    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)


  }

  // put é utilizado para atualização
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // delete
  delete(id: number): Observable<Product> {

    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );

  }


}
