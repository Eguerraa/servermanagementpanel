import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiService } from '../api.service';
import { Product } from '../product';
import { MatSort } from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  _id: string;
  prod_name: string;
  prod_desc: string;
  server_address: string;
  server_mem: number;
  server_cpu: string;
  prod_user: string;
  updated_at: Date;
  
  displayedColumns: string[] = ['prod_name', 'server_address', 'server_mem', 'server_cpu', 'prod_user', 'prod_desc'];
  data: Product[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {   
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.api.getProducts()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
