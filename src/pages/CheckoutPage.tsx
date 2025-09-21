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
  console.log({ productsChecked });
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
        {productsChecked.map((productChecked: RootObject) => (
          <ProductSection
            key={productChecked._id}
            productChecked={productChecked}
          />
        ))}
      </div>
      <ShippingMethod />
      <PaymentMethod />
      <TotalSummary />
    </div>
  );
}
