import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailsComponent } from '../../modal-details/modal-details.component';

@Component({
  selector: 'app-article-vue',
  templateUrl: './article-vue.component.html',
  styleUrl: './article-vue.component.css',
})
export class ArticleVueComponent {
  constructor(public storeService: StoreService, private _dialog: MatDialog) {}

  @Input()
  public product: any;

  ngOnInit(): void {}

  public addArticle(product: any) {
    if (this.storeService.listSousCommand.length < 5) {
      if (
        this.storeService.listSousCommand.filter(
          (objet: { id: any; any: any }) => objet.id == product.id
        ).length == 0
      ) {
        this.storeService.listSousCommand.push({
          id: product.id,
          prix: product.price,
          title: product.title,
          quantity: 1,
          category: product.category,
        });
      } else {
        this.storeService.listSousCommand.forEach(
          (element: { quantity: number; id: any; product: number }) => {
            if (element.id == product.id) {
              element.quantity = element.quantity + 1;
            }
          }
        );
      }

      localStorage.setItem(
        '_listSousCommand',
        JSON.stringify(this.storeService.listSousCommand)
      );
    } else {
      window.alert('The cart contains the maximum number of items (5 items).');
    }
  }

  public openModal(): void {
    this._dialog.open(ModalDetailsComponent, {
      data: this.product,
    });
  }
}
