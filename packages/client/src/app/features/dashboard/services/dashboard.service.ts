import { Injectable } from '@angular/core';
import { DocumentService } from '../../document/services/document.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly _documentService: DocumentService) {}

  public getSaleTotal() {}
}
