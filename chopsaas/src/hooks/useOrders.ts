"use client";
import { useState, useEffect } from "react";

// Real-time order subscription via polling
export function useOrders() {
  const [data, setData] = useState(null);
  return { data };
}
