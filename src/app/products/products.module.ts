
import { NgModule } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [],
  exports:[ProductsComponent],
  providers: [ProductsService],
  bootstrap: []
})
export class ProductsModule { }
