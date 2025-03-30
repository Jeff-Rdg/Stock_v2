import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-read',
  imports: [],
  standalone: true,
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss',
})
export class ProductReadComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private service: ProductService) {}
  ngOnInit(): void {
    this.service.read().subscribe((products) => {
      this.products = products;
    });
  }
}
