import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit, OnDestroy{
    productName = 'A Book';
    products = [];
    private productSubscription: Subscription;

    constructor(private productsService : ProductsService){
        
    }

    //Its a good practise to initialize here instead the construct
    ngOnInit(){
        this.products = this.productsService.getProducts();
        this.productSubscription = this.productsService.productsUpdated.subscribe( () => {
            this.products = this.productsService.getProducts();
        });
    }

    onAddProduct(form){
        if(form.valid){
            this.productsService.addProduct(form.value.productName);
        }
    }

    onRemoveProduct(productName : string){
        this.products = this.products.filter( p => p !== productName);
    }

    ngOnDestroy(){
        this.productSubscription.unsubscribe();
    }
}