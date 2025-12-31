interface I_Product{
  id: number;
  discount: number;
  name?: string;
  currentPrice?: number;
  originalPrice?: number;
  rated?: number;
  ratedCount?: number;
  imageUrl?: string;
}

export type { I_Product };