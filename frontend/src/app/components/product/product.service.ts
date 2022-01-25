import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

/* Precisamos injetar o HTTP CLient aqui no service */

export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // inserir la no backend um novo produto A PARTIR DO MODEL "Product"
  create(product: Product): Observable<Product> {

    //esse post retorna um Observable do tipo Produto
    return this.http.post<Product>(this.baseUrl, product)

  }

  //get dos produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  // ler por Id
  readById(id: number): Observable<Product> {

    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)


  }

  // put é utilizado para atualização
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  // delete
  delete(id: number): Observable<Product> {

    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url)

  }


}
