export type Variant = {
    type: string;
    value: string;
};

export type Inventory = {
    quantity: number;
    inStock: boolean;
};
export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    tags: "smartphone" | "Apple" | "iOS";
    variants: Variant;
    inventory: Inventory;
  }
  