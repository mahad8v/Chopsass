// QR URL builder
export function buildQrUrl(restaurantSlug: string, tableId: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  return `${base}/r/${restaurantSlug}/table/${tableId}`;
}
