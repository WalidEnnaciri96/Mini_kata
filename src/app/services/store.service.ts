import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  public listProducts: Array<any> | any = [];
  public listProductsFiltred: Array<any> | any = [];
  public listSousCommand: Array<any> = localStorage.getItem('_listSousCommand')
    ? JSON.parse(localStorage.getItem('_listSousCommand') as string)
    : [];

  public totalPrix() {
    var prixTotal = 0;
    this.listSousCommand.forEach(
      (element: { prix: number; quantity: number }) => {
        prixTotal = element.prix * element.quantity + prixTotal;
      }
    );
    return prixTotal;
  }
}
