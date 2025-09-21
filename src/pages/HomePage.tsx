import Slide from "../components/hero/Slide";
import BenefitList from "../components/hero/BenefitList";
import Category from "../components/category/Category";
import FlashSale from "../components/home/FlashSale";
import FeaturedTrend from "../components/home/FeaturedTrend";
import MostPurchased from "../components/home/MostPurchased";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Trang Chủ | Shopee</title>
        <meta
          name="description"
          content="Đây là trang chủ của chúng tôi là nơi có cái nhìn tổng quan về trang web"
        />
      </Helmet>
      <div className="bg-white pt-[30px]">
        <div className="mx-auto flex max-w-screen-xl gap-2">
          <div className="h-[268.2px] w-[70%] overflow-hidden">
            <Slide />
          </div>
          <div className="h-[260.2px] w-[30%]">
            <img
              src="	https://cf.shopee.vn/file/sg-11134258-824hs-meibpiqmxxxhc9_xhdpi"
              alt=""
              className="h-1/2 rounded-sm"
            />
            <img
              src="https://cf.shopee.vn/file/sg-11134258-824gt-meibqulf5am878_xhdpi"
              alt=""
              className="mt-2 h-1/2 rounded-sm"
            />
          </div>
        </div>
        <BenefitList />
      </div>
      {/* <CategoryList /> */}
      <Category />
      <FlashSale />
      <FeaturedTrend />
      <MostPurchased />
    </>
  );
}
