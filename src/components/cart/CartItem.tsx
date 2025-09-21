import { useState } from "react";
import {
  useDeletePurchasesMutation,
  useReadPurchasesQuery,
  useUpdatePurchasesMutation,
} from "../../services/rootApi";
import { useDispatch } from "react-redux";
import { readCartCount } from "../../redux/slices/CartCountSlice";
import { Link } from "react-router";
import { useAppSelector } from "../../redux/store";

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
interface IPropCartItem {
  value: RootObject;
  checked: boolean;
  onCheck: () => void;
  refetch: () => void;
}

export default function CartItem({
  value,
  checked,
  onCheck,
  refetch,
}: IPropCartItem) {
  const dispatch = useDispatch();
  const countNumber = useAppSelector(
    (state) => state.cartCount.counts[value.product._id],
  );
  const [updatePurchase] = useUpdatePurchasesMutation();
  const [deletePurchase] = useDeletePurchasesMutation();
  const { refetch: refetchReadPurchase } = useReadPurchasesQuery({ status: 0 });
  const [count, setCount] = useState(value.buy_count);
  return (
    <div className="mx-auto mt-[30px] max-w-screen-xl rounded bg-white p-5 text-sm">
      <div className="grid grid-cols-12 items-center gap-9 rounded-sm border border-solid border-gray-200 p-5">
        <div className="col-span-5 flex items-center gap-3">
          <input
            type="checkbox"
            name=""
            id=""
            className="accent-primaryColor"
            checked={checked}
            onChange={onCheck}
          />
          <Link
            to={`/products/${value.product._id}`}
            className="flex items-center gap-3"
          >
            <img
              src={value.product.image}
              alt="anhshopeecart"
              className="h-[80px] w-[80px] object-cover"
            />
            <p className="line-clamp-2">{value.product.name}</p>
          </Link>
        </div>
        <div className="col-span-2">
          <p>
            <span className="line-through">
              ₫{value.product.price_before_discount.toLocaleString("vi-VN")}
            </span>
            &nbsp; ₫{value.product.price.toLocaleString("vi-VN")}
          </p>
        </div>
        <div className="col-span-2 flex items-center">
          <button
            className="flex h-8 w-8 items-center justify-center rounded border"
            onClick={async () => {
              const newCount = count <= 1 ? 1 : count - 1;
              const res = await updatePurchase({
                product_id: value.product._id,
                buy_count: newCount,
              }).unwrap();
              setCount(res.data.buy_count);
              dispatch(
                readCartCount({
                  productId: value.product._id,
                  count: res.data.buy_count,
                }),
              );
            }}
          >
            <svg
              enableBackground="new 0 0 10 10"
              viewBox="0 0 10 10"
              x={0}
              y={0}
              className="h-[10px] w-[10px] fill-current"
            >
              <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
            </svg>
          </button>
          <span className="flex h-8 w-8 items-center justify-center border">
            {countNumber || count}
          </span>

          <button
            className="flex h-8 w-8 items-center justify-center rounded border"
            onClick={async () => {
              const newCount =
                count >= value.product.quantity
                  ? value.product.quantity
                  : count + 1;
              const res = await updatePurchase({
                product_id: value.product._id,
                buy_count: newCount,
              }).unwrap();
              setCount(res.data.buy_count);
              dispatch(
                readCartCount({
                  productId: value.product._id,
                  count: res.data.buy_count,
                }),
              );
            }}
          >
            <svg
              enableBackground="new 0 0 10 10"
              viewBox="0 0 10 10"
              x={0}
              y={0}
              className="h-[10px] w-[10px] fill-current"
            >
              <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
            </svg>
          </button>
        </div>
        <div className="col-span-2">
          <span>
            {(
              value.product.price * countNumber ||
              value.product.price * value.buy_count
            ).toLocaleString("vi-VN")}
          </span>
        </div>
        <div className="col-span-1">
          <button
            className="bg-red-500 px-5 py-1 text-white"
            onClick={async () => {
              await deletePurchase([value._id]);
              refetch();
              refetchReadPurchase();
            }}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
