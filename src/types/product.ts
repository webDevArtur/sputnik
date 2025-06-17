export type CurrencyType = 'RUB' | 'USD' | 'EUR';

export interface IProduct {
  id: number;
  title: string;
  origin: string;
  price: number;
  currency: CurrencyType;
  imageUrl: string;
  className?: string;
}