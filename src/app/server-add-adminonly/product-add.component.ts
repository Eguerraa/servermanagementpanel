import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})

export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  prod_name:string='';
  server_address:string='';
  prod_desc:string='';
  prod_user:string='';
  server_mem: number=null;
  server_cpu: string='';
  updated_at:Date=null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'prod_name' : [null, Validators.required],
      'server_address' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_user' : [null, Validators.required],
      'server_mem' : [null, Validators.required],
      'server_cpu' : [null, Validators.required],
      //'updated_at' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addProduct(form)
      .subscribe(res => {          
          console.log(res);
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
