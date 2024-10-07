import { Component,OnInit } from '@angular/core';
import { StoreService } from './services/store.service';
import { WebserviceService } from './services/webservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  

  title = 'fakestore';

  ngOnInit(): void {
    
  }


}
