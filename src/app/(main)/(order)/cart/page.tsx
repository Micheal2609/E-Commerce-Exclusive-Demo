'use client';

import { Breadcrumb } from "@/src/app/shared/components/index";
import { ProductListSection } from "./components/index";

const CartPage = () => {
    return (
        <div className="w-full px-36 py-7">
            <Breadcrumb />
            <ProductListSection />
        </div>
    );
}

export default CartPage