import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { ProductEditComponent } from './pages/product-edit/product-edit.component'
import { ProductUploadComponent } from './pages/product-upload/product-upload.component'
import { ProductEditFormComponent } from './components/product-edit-form/product-edit-form.component'
import { ProductRoutingModule } from './product-routing.module'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [
    ProductListComponent,
    ProductEditComponent,
    ProductUploadComponent,
    ProductEditFormComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
