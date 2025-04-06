import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  imports: [MatTableModule],
  standalone: true,
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss',
})
export class ProductReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<ProductModel>([]);

  constructor(private service: ProductService) {}
  ngOnInit(): void {
    this.service.read().subscribe({
      next: (products) => {
        this.dataSource.data = products;
      },
      error: (err) => {
        console.log('aconteceu um erro', err);
      },
    });
  }
}
