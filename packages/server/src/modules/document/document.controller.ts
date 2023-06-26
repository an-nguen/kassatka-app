import { Controller, Get } from '@nestjs/common';
import { endOfDay, startOfDay } from 'date-fns';
import { DocumentService } from './document.service';

@Controller('document')
export class DocumentController {
  public constructor(private readonly _documentService: DocumentService) {}

  @Get('sales/total/today')
  public getSales() {
    const now = Date.now();
    return this._documentService.getSaleTotal(startOfDay(now), endOfDay(now));
  }
}
