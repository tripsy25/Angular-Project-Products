//import { Component } from '@angular/core';
//import { Console } from 'console';
import { IProduct } from './product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
   // selector:'pm-products', //It''l no longer be used inside the app.module.ts
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']  //Encapsulating component styles crated .component.css file
})

export class ProductListComponent implements OnInit, OnDestroy{
    showImage: Boolean = false;
    pageTitle: string = 'Product-List!!!!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string = '';
    sub! : Subscription;
    randomMessage: String = 'Hello';
    //listFilter: string = 'cart';
    //getter & setter for filter

    private _listFilter: string = ''; //Backing variable or Private vault in a bank

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter;
        console.log('In setter: ', value);
        this.filteredProducts = this.performFilter(value);
    }
    
    filteredProducts: IProduct[] = []; //filteredProducts will be used inside the template in *ngFor
    products: IProduct[]  = [   //Interface is created to set some basic rules for properties and 
                                //methods using class
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden carton",
            "price": 32.99,
            "starrating": 4.2,
            "imageUrl":"assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "March 21, 2021",
            "description": "Curved Steel Hammer",
            "price": 8.9,
            "starrating": 4.8,
            "imageUrl":"assets/images/hammer.png"
        }
    ];

    constructor(private productService : ProductService){} 
    //Here, service is injected when the component is instantiated.
    //For creating an instance of object for service. For performing 
    //Dependency Injection. We cannot write so much code inside the constructor as
    //it is used to initiate the component and so it should not take much time for
    //execution. Thus, we'll be using onInit() lifecycle hook for initializing the 
    //component and is a great place for retrieving the data for the template.

    performFilter(filterby: string): IProduct[]{
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().includes(filterby)); //Arrow function with js functions inside
    }


    toggleImage(): void{
        this.showImage = !this.showImage;
    }  

    ngOnInit(): void {      //Lifecycle hook Interface
        //console.log('In oninit');
        // this.sub = this.productService.getProducts().subscribe({
        //     next: products => {
        //         this.products = products,
        //         this.filteredProducts = this.products;
        //     },
        //     error: err => this.errorMessage = err
        // });
        this.productService.getProducts().subscribe(product => {
            this.products = product;
            this.filteredProducts = this.products;
        })
        // It will insert the data into the products array by fetching it 
        //from the productService and by calling getProducts method.
        
        //this._listFilter = 'cart'; //setting the default value for set as cart
    }

    ngOnDestroy(){
      if(this.sub)
        this.sub.unsubscribe();
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = 'ProductList: ' + message ;
    }

}