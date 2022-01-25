import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  product: Product = {
    name: '',
    price: 0
  }
  ngOnInit(): void {


  }


  createProduct(): void {

    // aqui disparamos o método criado no services
    //o método subscribe notifica quando a resposta chegar
    this.productService.create(this.product).subscribe(() => {

      this.productService.showMessage('Producto Criado');

      this.router.navigate(['/products'])
    })

  }

  cancel(): void {

    this.router.navigate(['/products'])
  }
}
