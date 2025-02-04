import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(
  private productService: ProductsService
){}
products:Product[]=[];
onProductOutput(product:Product){
  console.log(product,'Output');
}
ngOnInit(){
  this.productService
  .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
.subscribe((products:Products)=>{
this.products=products.items
  });
}
}
