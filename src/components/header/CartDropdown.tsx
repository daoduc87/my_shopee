import { useReadPurchasesQuery } from "../../services/rootApi";
import { Link } from "react-router";

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
export default function CartDropdown() {
  const { data } = useReadPurchasesQuery({ status: -1 });
  if (!data || data.data.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center rounded bg-white p-4 font-sans shadow-lg">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/ef577a25315c384ed114.png"
            alt="emptyCart"
            className="h-[6.125rem] w-[6.75rem]"
          />
          <p className="capitalize">Chưa có sản phẩm</p>
          <div className="mt-4 flex justify-end">
            <Link to={"/cart"}>
              <button className="rounded bg-primaryColor px-5 py-2 text-sm font-semibold text-white hover:bg-[#d74425]">
                Xem Giỏ Hàng
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="rounded bg-white p-4 font-sans shadow-lg">
      <div className="mb-3 text-sm text-gray-400">Sản Phẩm Mới Thêm</div>
      <div className="space-y-4">
        {data?.data.map((value: RootObject) => (
          <div className="flex items-start justify-between" key={value._id}>
            <div className="flex gap-1">
              <img
                src={value.product.image}
                alt="Áo thun nữ cổ vuông"
                className="h-[50px] w-[50px] rounded object-cover"
              />
              <div className="ml-3 flex flex-1 flex-col">
                <div className="line-clamp-2 w-[240px] truncate text-sm font-normal text-black">
                  {value.product.name}
                </div>
              </div>
            </div>
            <div className="text-sm font-semibold text-primaryColor">
              {(value.product.price * value.buy_count).toLocaleString("vi-VN")}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-4 flex justify-end">
        <Link to={"/cart"}>
          <button className="rounded bg-primaryColor px-5 py-2 text-sm font-semibold text-white hover:bg-[#d74425]">
            Xem Giỏ Hàng
          </button>
        </Link>
      </div>
    </div>
  );
}
