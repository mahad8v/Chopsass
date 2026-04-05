"use client";
import { useState, useEffect } from "react";

// Apply restaurant branding CSS vars
export function useRestaurantTheme() {
  const [data, setData] = useState(null);
  return { data };
}
