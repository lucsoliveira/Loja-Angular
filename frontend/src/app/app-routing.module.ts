import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
/* ARQUIVO DE CONFIGURAÇÃO DE ROTAS */

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';



/* aqui não tem barra "/" */
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreatComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
