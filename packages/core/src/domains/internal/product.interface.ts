export interface IProduct {
  id: number;
  id1C: string;
  categoryId: number;
  name: string;
  price: number;
  freePrice: boolean;
  barcodes: string[];
  nomenclatureType?: string;
}
