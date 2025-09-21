import Countdown from "./Countdown";

import { useGetProductsQuery } from "../../services/rootApi";
import { Link } from "react-router";
import ProductItem from "../products/ProductItem";

interface RootObject {
  _id: string;
  images: string[];
  price: number;
  rating: number;
  price_before_discount: number;
  quantity: number;
  sold: number;
  view: number;
  name: string;
  category: Category;
  image: string;
  createdAt: string;
  updatedAt: string;
}
interface Category {
  _id: string;
  name: string;
  __v: number;
}
export default function FlashSale() {
  const { data } = useGetProductsQuery({ limit: 30 });
  const saleProducts = data?.data.products
    .filter((pro: RootObject) => pro.price < pro.price_before_discount)
    .slice(0, 5);
  return (
    <div className="mx-auto mt-6 max-w-screen-xl bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold text-red-500">
          <div className="h-7 w-[8.125rem] bg-[url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/5112f196d53068a0c14b.png')] bg-contain bg-center bg-no-repeat text-[24px]"></div>
          <Countdown />
        </div>
        <Link to={"/flash-sale"}>
          <div className="cursor-pointer text-sm text-red-500">
            Xem tất cả &gt;
          </div>
        </Link>
      </div>
      <ProductItem paginationProducts={saleProducts} />
    </div>
  );
}
