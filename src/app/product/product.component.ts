import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productName: string; //@Input: Receive elements for outside
  @Output() productClicked = new EventEmitter(); //@Output: Pass Element for outside

  constructor(private productsService: ProductsService) { 
  }

  ngOnInit() {
  }

  onClicked(){
    this.productsService.deleteProduct(this.productName);
  }

}
