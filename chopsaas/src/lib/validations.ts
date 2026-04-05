import { z } from "zod";

export const loginSchema = z.object({
  email:    z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  name:             z.string().min(2),
  email:            z.string().email(),
  password:         z.string().min(8),
  restaurantName:   z.string().min(2),
  restaurantSlug:   z.string().min(2).regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  address:          z.string().optional(),
  phone:            z.string().optional(),
});

export const menuItemSchema = z.object({
  name:        z.string().min(1),
  description: z.string().optional(),
  price:       z.number().positive(),
  image:       z.string().url().optional(),
  categoryId:  z.string().cuid(),
  isAvailable: z.boolean().default(true),
});

export const orderSchema = z.object({
  tableId:      z.string().cuid(),
  restaurantId: z.string().cuid(),
  notes:        z.string().optional(),
  items:        z.array(z.object({
    menuItemId: z.string().cuid(),
    quantity:   z.number().int().positive(),
    notes:      z.string().optional(),
  })).min(1),
});

export const transactionSchema = z.object({
  orderId:   z.string().cuid(),
  amount:    z.number().positive(),
  method:    z.enum(["CASH", "CARD", "MOBILE_MONEY", "ONLINE"]),
  reference: z.string().optional(),
  notes:     z.string().optional(),
});

export type LoginInput       = z.infer<typeof loginSchema>;
export type RegisterInput    = z.infer<typeof registerSchema>;
export type MenuItemInput    = z.infer<typeof menuItemSchema>;
export type OrderInput       = z.infer<typeof orderSchema>;
export type TransactionInput = z.infer<typeof transactionSchema>;
