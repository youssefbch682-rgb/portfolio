import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Stagger animation delays for children elements
export function staggerDelay(index: number, base = 0.1): number {
  return index * base;
}

// Format number with + suffix
export function formatStat(value: string): string {
  return value;
}
