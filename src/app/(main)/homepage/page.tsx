import { Line } from "../../shared/components"
import { FlashSaleSection, BannerSection, BrowseByCategorySection, BestSellingProductSection, BrandSection, ExploreOurProductSection, FeatureSection, ServiceSection } from "./components/index"


const HomePage = () => {
  return (
    <div className="w-full px-36 py-3">
      <BannerSection />
      <FlashSaleSection />
      <Line />
      <BrowseByCategorySection />
      <BestSellingProductSection />
      <BrandSection />
      <ExploreOurProductSection />
      <FeatureSection />
      <div className="my-20">
        <ServiceSection />
      </div>
    </div>
  )
}

export default HomePage
