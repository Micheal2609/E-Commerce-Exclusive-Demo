'use client';

import { Breadcrumb } from "@/src/app/shared/components/index";
import { CartSummarySection, CouponSection, ProductListSection } from "./components/index";

const CartPage = () => {
    return (
        <div className="w-full px-36 py-7">
            <Breadcrumb />
            <ProductListSection />
            <div className="grid grid-cols-2 gap-4">
                <CartSummarySection />
                <CouponSection />
            </div>
        </div>
    );
}

export default CartPage