import type { Category, Difficulty } from "./data";

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  easy: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  hard: "bg-red-100 text-red-800",
};

export const CATEGORY_LABELS: Record<Category, string> = {
  streaming: "Streaming",
  music: "Music",
  fitness: "Fitness",
  software: "Software",
  gaming: "Gaming",
  news: "News",
  food: "Food & Delivery",
  cloud: "Cloud Storage",
  productivity: "Productivity",
  other: "Other",
};
