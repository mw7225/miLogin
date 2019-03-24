import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Service
import { ProductService } from '../../../services/product.service';

// Product Class
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm)
  {
    this.validadorDeCampos(productForm);

    
    if (productForm.value.$key == null)
    {
      this.productService.insertProduct(productForm.value);
      alert("Producto ingresado.");
    }
    else
    {
      this.productService.updateProduct(productForm.value);
      alert("Producto actualizado.");
    }

    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm)
  {
    if(productForm != null)
      productForm.reset();
      this.productService.selectedProduct = new Product();
  }


  validadorDeCampos(productForm: NgForm)
  {
    if (productForm.value.name == null ){
      alert("Ingrese el nombre de producto.");
    }
    else if (productForm.value.category == null ){
      alert("Ingrese la categoria de producto.");
    }
    else if (productForm.value.location == null ){
      alert("Ingrese la locacion de producto.");
    }
    else if (productForm.value.price == null ){
      alert("Ingrese el precio de producto.");
    }
  }
}
