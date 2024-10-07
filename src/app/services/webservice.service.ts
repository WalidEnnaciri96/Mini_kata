import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  //Doit normalement etre mise dans les fichiers environment
  public url="https://fakestoreapi.com/";

  constructor(public http:HttpClient,public storeService:StoreService) { }

  public getProducts(){
    this.http.get(this.url+"products").subscribe(data => {
      this.storeService.listProducts=data;
      this.storeService.listProductsFiltred=data;
    },
      error => {
        alert('error Product')
      })
  }


}
