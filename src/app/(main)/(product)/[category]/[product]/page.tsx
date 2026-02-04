'use client';
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
    const { category_id, product_id } = useParams();
  return <div>{category_id} - {product_id}</div>;
}

export default ProductDetailPage;