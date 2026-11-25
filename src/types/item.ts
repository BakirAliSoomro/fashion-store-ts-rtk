export interface Rating {
    stars: number;
    count: number;
}

export interface Item {
  id: string;
  image: string;
  company: string;
  item_name: string;
  original_price: number;
  current_price: number;
  discount_percentage: number;
  return_period: number;
  delivery_date: string;
  rating: Rating;
}

