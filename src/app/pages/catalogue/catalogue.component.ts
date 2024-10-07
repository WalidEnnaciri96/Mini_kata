import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { WebserviceService } from '../../services/webservice.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css',
})
export class CatalogueComponent {
  public filter = '';

  constructor(
    public storeService: StoreService,
    public webservice: WebserviceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.webservice.getProducts();
  }

  public filterListProduct() {
    this.storeService.listProductsFiltred =
      this.storeService.listProducts.filter((pr: { title: string }) =>
        pr.title.toUpperCase().includes(this.filter.toUpperCase())
      );
  }

  public go2Cart() {
    this.router.navigate(['/cart']);
  }


}
