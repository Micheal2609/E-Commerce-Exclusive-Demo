import { CartProduct } from "@/src/app/shared/components/index";
import { I_Product } from "@/src/app/shared/interface";

const ProductCardSection = () => {
  const dataFake: I_Product[] = [
    {
      id: 1,
      discount: 20,
      name: "AK-900 Mechanical Keyboard",
      currentPrice: 79.99,
      originalPrice: 99.99,
      rated: 4.6,
      ratedCount: 124,
      imageUrl: "/assets/images/product/ak_900_keyboard.png",
    },
    {
      id: 2,
      discount: 10,
      name: "Comfort Lounge Chair",
      currentPrice: 134.99,
      originalPrice: 149.99,
      rated: 4.4,
      ratedCount: 87,
      imageUrl: "/assets/images/product/comfort_chair.png",
    },
    {
      id: 3,
      discount: 0,
      name: "Gucci Duffle Bag",
      currentPrice: 1200.0,
      originalPrice: 1200.0,
      rated: 4.8,
      ratedCount: 2400,
      imageUrl: "/assets/images/product/gucci_duffle_bag.png",
    },
    {
      id: 4,
      discount: 30,
      name: "IdeaPad Gaming 3i",
      currentPrice: 699.99,
      originalPrice: 999.99,
      rated: 4.5,
      ratedCount: 532,
      imageUrl: "/assets/images/product/ideapad-gaming-3i-01-500x500 1.png",
    },
    {
      id: 5,
      discount: 0,
      name: "IPS LCD Gaming Monitor",
      currentPrice: 199.99,
      originalPrice: 199.99,
      rated: 4.3,
      ratedCount: 210,
      imageUrl: "/assets/images/product/ips_lcd_gaming_monitor.png",
    },
    {
      id: 6,
      discount: 0,
      name: "PlayStation 5 (Slim)",
      currentPrice: 449.99,
      originalPrice: 449.99,
      rated: 4.7,
      ratedCount: 1500,
      imageUrl: "/assets/images/product/ps5-slim-goedkope-playstation_large 1.png",
    },
  ];

  return (
    <div className="flex gap-2 overflow-hidden overflow-x-scroll">
      {dataFake && dataFake.map((item) => <CartProduct product={item} key={item.id} />)}
    </div>
  );
};

export default ProductCardSection;
