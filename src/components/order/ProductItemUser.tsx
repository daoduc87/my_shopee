import ButtonActions from "./ButtonActions";
import StatusIllustrate from "./StatusIllustrate";

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
interface IPropWaitingApproveType {
  item: RootObject;
}
export default function WaitingApprove({ item }: IPropWaitingApproveType) {
  return (
    <div className="rounded-sm bg-white p-4 shadow-md">
      <div className="mb-3 flex items-center justify-between border-b border-solid border-gray-200 pb-3">
        {/* <div className="flex items-center gap-2">
          <span className="rounded bg-primaryColor px-2 py-1 text-xs text-white">
            Yêu thích
          </span>
          <span className="font-semibold">Hn_boy_29</span>
        </div> */}
        <span className="ml-auto font-medium text-primaryColor">
          <StatusIllustrate status={item.status} />
        </span>
      </div>
      <div className="flex gap-4 border-b border-solid border-gray-200">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="h-20 w-20 rounded-md object-cover"
        />
        <div className="flex-1 space-y-1">
          <h2 className="text-base font-medium leading-[22px] text-[#000000DE]">
            {item.product.name}
          </h2>

          <p className="text-sm">x{item.buy_count}</p>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <span className="text-sm text-gray-400 line-through">
            {item.price_before_discount.toLocaleString("vi-VN")}₫
          </span>
          <span className="font-semibold text-red-500">
            {item.price.toLocaleString("vi-VN")}₫
          </span>
        </div>
      </div>
      <div className="mt-2 flex justify-end">
        <p className="text-sm leading-[20px]">
          Số tiền phải trả:
          <span className="ml-[10px] text-2xl font-medium text-primaryColor">
            {(item.price * item.buy_count).toLocaleString("vi-VN")}₫
          </span>
        </p>
      </div>
      <div className="mt-4 flex justify-end gap-3">
        <ButtonActions status={item.status} />
        <button className="rounded-lg border px-4 py-2 text-gray-600 hover:bg-gray-100">
          Liên Hệ Người Bán
        </button>
        <button className="rounded-lg border px-4 py-2 text-gray-600 hover:bg-gray-100">
          Hủy Đơn Hàng
        </button>
      </div>
    </div>
  );
}
