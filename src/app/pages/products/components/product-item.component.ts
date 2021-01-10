
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

  @Input() id: string;
  @Input() imageUrl: string = "https://i8.rozetka.ua/goods/20153303/xiaomi_mi_10t_6_128gb_cosmic_black_images_20153303041.jpg";
  @Input() title: string = "Мобильный телефон Xiaomi Mi 10T 6/128GB Cosmic Black";
  @Input() count: number = 0;
  @Input() price: number = 12999;

  constructor() { }

  ngOnInit() { }

  addToCart() {
    
  }
}