import { Component, OnInit } from '@angular/core';

// service
import { ProductService } from '../../../services/product.service';

// Class Product
import { Product } from '../../../models/product';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item => {
      this.productList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productList.push(x as Product);
      });
    });
  }

  onEdit(product: Product)
  {
    var respuesta = confirm("La accion modificara el registro. ¿Desea continuar?");
    if (respuesta == true)
    {
      this.productService.selectedProduct = Object.assign({}, product);
      alert("Registro modificado.");
    } 
    else
    {
      alert("EL registro no se ha modificado.");
    }
  }

  onDelete($key: string)
  {
    var respuesta = confirm("La accion eliminara el registro. ¿Desea continuar?");
    if (respuesta == true)
    {
      this.productService.deleteProduct($key);
      alert("Registro eliminado.");
    } 
    else
    {
      alert("EL registro no se ha eliminado.");
    }
  }

}
