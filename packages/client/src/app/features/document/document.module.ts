import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentListComponent } from './components/document-list/document-list.component'

@NgModule({
  declarations: [
    DocumentListComponent
  ],
  imports: [CommonModule, DocumentRoutingModule],
})
export class DocumentModule {}
