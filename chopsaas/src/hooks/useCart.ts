"use client";
import { useState, useEffect } from "react";

// Cart state stored in localStorage keyed by tableId
export function useCart() {
  const [data, setData] = useState(null);
  return { data };
}
