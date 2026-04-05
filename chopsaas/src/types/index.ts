import type { Role, OrderStatus, PaymentMethod } from "@prisma/client";

export type { Role, OrderStatus, PaymentMethod };

export interface RestaurantConfig {
  id:           string;
  name:         string;
  slug:         string;
  logo:         string | null;
  primaryColor: string;
  accentColor:  string;
  fontFamily:   string;
  layout:       "grid" | "list" | "minimal";
  isActive:     boolean;
}

export interface CartItem {
  menuItemId:  string;
  name:        string;
  price:       number;
  quantity:    number;
  notes?:      string;
  image?:      string;
}

export interface CartState {
  tableId:      string;
  restaurantId: string;
  items:        CartItem[];
}

export interface OrderWithItems {
  id:          string;
  orderNumber: number;
  status:      OrderStatus;
  total:       number;
  notes:       string | null;
  createdAt:   string;
  table:       { number: number; label: string | null };
  items:       {
    id:        string;
    quantity:  number;
    price:     number;
    notes:     string | null;
    menuItem:  { name: string; image: string | null };
  }[];
}
