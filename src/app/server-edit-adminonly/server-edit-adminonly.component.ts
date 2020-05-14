import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Product } from '../product';


@Component({
  selector: 'app-server-edit-adminonly',
  templateUrl: './server-edit-adminonly.component.html',
  styleUrls: ['./server-edit-adminonly.component.scss']
})
export class ServerEditComponentAdminOnly implements OnInit {  

  productForm: FormGroup;
  _id:string='';  
  prod_name:string='';
  prod_desc:string='';
  server_address: string='';
  server_mem:number=null;
  server_cpu: string;
  prod_user: string;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  product: Product = { _id:'', prod_name: '', prod_desc: '', server_address: '', server_mem: null, server_cpu: '', prod_user: '', updated_at: null };

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
    this.getProductDetails(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'prod_name' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'server_address' : [null, Validators.required],
      'server_mem'  : [null, Validators.required],
      'server_cpu'  : [null, Validators.required],
      'prod_user' : [null, Validators.required]
    });
  }

  getProductDetails(id) {
    this.api.getProduct(id)
      .subscribe(data => {
        this.product = data;
        console.log(this.product);
        this.isLoadingResults = false;
      });
  }

  getProduct(id) {
    this.api.getProduct(id).subscribe(data => {
      this._id = data._id;
      this.productForm.setValue({
        prod_name: data.prod_name,
        server_address: data.server_address,
        prod_desc: data.prod_desc,
        server_mem: data.server_mem,
        server_cpu: data.server_cpu,
        prod_user: data.prod_user
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateProduct(this._id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  productDetails() {
    this.router.navigate(['/product-details', this._id]);
  }

  deleteProduct(id) {
    this.isLoadingResults = true;
    this.api.deleteProduct(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/allservers']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  
}
