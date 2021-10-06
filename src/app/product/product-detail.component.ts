import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  //selector: 'pm-product-detail', // We don't need to nest the component, we need routing as of now.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  
  constructor(private Route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.Route.snapshot.paramMap.get('id'));
    this.pageTitle += `:${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2021',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 32.99,
      'starrating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    }
  }

  onBack(): void{
    this.router.navigate(['./products']);
  }

}
