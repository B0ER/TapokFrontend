
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductItemService } from './product-item.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

  @Input() id: string;
  @Input() imageUrl: string = "";
  @Input() title: string = "";
  @Input() count: number = 0;
  @Input() price: number = 0;

  isLogged: boolean = false;

  constructor(
    private readonly productItemService: ProductItemService,
    private readonly toastr: ToastrService
  ) {
    this.isLogged = localStorage.getItem('isLogged') === "true";
  }

  ngOnInit() { }

  addToCart() {
    console.log("add to cart")
    this.productItemService.addToCart(this.id).subscribe(() => {
      this.toastr.info('Product was added to cart!');
    });
  }
}