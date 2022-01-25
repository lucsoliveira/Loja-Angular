import { Component, OnInit } from '@angular/core';

//importando o Router
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // passando o router para o construtor e ele injetará ele no módulo
  // podendo usar o router nas funções
  // isso se chama Injeção de dependência
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
  }

}
