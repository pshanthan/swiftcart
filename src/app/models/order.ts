import { Product } from './product';

export interface Order {
  items: Product[];
  name: string;
  address: string;
  city: string;
  zip: string;
}
