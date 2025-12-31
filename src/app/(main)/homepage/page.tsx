import { Line } from "../../shared/components"
import { FlashSaleSection, BannerSection, BrowseByAttributeSection} from "./components/index"


const HomePage = () => {
  return (
    <div className="w-full px-36 py-3">
      <BannerSection />
      <FlashSaleSection />
      <Line />
      <BrowseByAttributeSection />
    </div>
  )
}

export default HomePage
