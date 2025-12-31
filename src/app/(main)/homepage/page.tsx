import { Line } from "../../shared/components"
import { FlashSaleSection, BannerSection, BrowseByCategorySection, BestSellingProductSection, BrandSection} from "./components/index"


const HomePage = () => {
  return (
    <div className="w-full px-36 py-3">
      <BannerSection />
      <FlashSaleSection />
      <Line />
      <BrowseByCategorySection />
      <BestSellingProductSection />
      <BrandSection />
    </div>
  )
}

export default HomePage
