import { Helmet } from "react-helmet";
import AddressSection from "../components/checkout/AddressSection";
import PaymentMethod from "../components/checkout/PaymentMethod";
import ProductSection from "../components/checkout/ProductSection";
import ShippingMethod from "../components/checkout/ShippingMethod";
import TotalSummary from "../components/checkout/TotalSummary";
import { useAppSelector } from "../redux/store";

interface RootObject {
  _id: string;
  buy_count: number;
  price: number;
  price_before_discount: number;
  status: number;
  user: string;
  product: Product;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Product {
  _id: string;
  images: string[];
  price: number;
  rating: number;
  price_before_discount: number;
  quantity: number;
  sold: number;
  view: number;
  name: string;
  description: string;
  category: Category;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Category {
  _id: string;
  name: string;
  __v: number;
}
export default function CheckoutPage() {
  const productsChecked = useAppSelector((state) => state.buy.buyProducts);
  const productBuyNow = useAppSelector((state) => state.buyNow.buyProducts);
  return (
    <div className="mx-auto my-4 max-w-screen-xl space-y-5 bg-gray-50 p-6">
      <Helmet>
        <title>Tiến Hành Thanh Toán</title>
        <meta
          name="description"
          content="Trang thủ tục tiến hành thanh toán các sản phẩm của bạn"
        />
      </Helmet>
      <AddressSection />
      <div className="space-y-5 rounded-lg bg-white p-4 shadow">
        <div className="grid grid-cols-12 gap-5 px-5">
          <div className="col-span-6">Sản phẩm</div>
          <div className="col-span-2">Đơn giá</div>
          <div className="col-span-2">Số lượng</div>
          <div className="col-span-2">Thành tiền</div>
        </div>
        {productsChecked.length > 0 &&
          productsChecked.map((productChecked: RootObject) => (
            <ProductSection
              key={productChecked._id}
              productChecked={productChecked}
            />
          ))}
        {productsChecked.length === 0 && productBuyNow && (
          <div className="grid grid-cols-12 items-center gap-5 rounded-sm border border-solid border-gray-200 p-5">
            <div className="col-span-6 flex items-center gap-3">
              <img
                src={productBuyNow.image}
                alt={productBuyNow.name}
                className="h-[80px] w-[80px] object-cover"
              />
              <p className="line-clamp-2">{productBuyNow.name}</p>
            </div>
            <div className="col-span-2">
              <p>{productBuyNow.price.toLocaleString("vi-VN")}₫</p>
            </div>
            <div className="col-span-2 ml-6 flex items-center">
              {productBuyNow.buy_count}
            </div>
            <div className="col-span-2">
              <span>
                {(
                  productBuyNow?.price * productBuyNow.buy_count
                ).toLocaleString("vi-VN")}
                ₫
              </span>
            </div>
          </div>
        )}
      </div>
      <ShippingMethod />
      <PaymentMethod />
      <TotalSummary />
    </div>
  );
}
