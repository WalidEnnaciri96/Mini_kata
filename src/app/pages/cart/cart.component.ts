import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  public displayedColumns: string[] = ['name', 'price', 'quantity', 'symbol'];

  constructor(public storeService: StoreService) {}

  public delete(object: any) {
    this.storeService.listSousCommand =
      this.storeService.listSousCommand.filter(
        (objet: { id: any }) => objet.id !== object.id
      );
    localStorage.setItem(
      '_listSousCommand',
      JSON.stringify(this.storeService.listSousCommand)
    );
  }
}
