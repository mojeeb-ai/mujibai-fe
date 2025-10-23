export interface Plan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: { name: string; included: boolean }[];
  isPopular: boolean;
}
