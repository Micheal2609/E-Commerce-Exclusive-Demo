'use client';
import { useParams } from 'next/navigation';

const CategoryPage = () => {
    const { category_id } = useParams();
    return <div>{category_id}</div>;
}

export default CategoryPage