'use client';

import { JusForYouSection, WishlistSection } from "./components/index";

const WishlistPage = () => {
  return (
    <div className="w-full px-36 py-7">
        <WishlistSection />
        <JusForYouSection />
    </div>
  )
}

export default WishlistPage;