import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { ProductEditComponent } from './pages/product-edit/product-edit.component'

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: '{:id}', component: ProductEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
