import { useState } from "react";
import DeliveryTime from "../DeliveryTime";
import {
  useAddToCartMutation,
  useReadPurchasesQuery,
} from "../../services/rootApi";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../../redux/slices/SnackbarSlice";

interface RootObject {
  message: string;
  data: Data;
}

interface Data {
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
}

interface Category {
  _id: string;
  name: string;
  __v: number;
}
interface IPropProductOption {
  thumbnails: string[];
  setMainImage: (thumb: string) => void;
  thumbIndex: number;
  setThumbIndex: (index: number) => void;
  data: RootObject;
}
export default function ProductOption({
  thumbnails,
  setMainImage,
  thumbIndex,
  setThumbIndex,
  data,
}: IPropProductOption) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [addToCart] = useAddToCartMutation();
  const { refetch } = useReadPurchasesQuery({ status: -1 });
  const productShirt = data?.data.category.name === "Áo thun";
  return (
    <div className="space-y-5 text-sm">
      <div className="flex gap-4">
        <h3 className="text-base font-normal leading-5 text-[#757575]">
          Vận chuyển
        </h3>
        <DeliveryTime />
      </div>
      <div className="flex gap-4">
        <h3 className="w-[100px] text-base font-normal leading-5 text-[#757575]">
          An tâm mua sắm cùng Shopee
        </h3>
        {productShirt ? (
          <p className="mt-1 flex items-center gap-2 text-red-500">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/281bf4388d58a7cc965a.svg"
              alt=""
            />
            Bảo hiểm Thời trang
          </p>
        ) : (
          <p className="mt-1 flex items-center gap-2 text-red-500">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/281bf4388d58a7cc965a.svg"
              alt=""
            />
            Chính hãng 100%
          </p>
        )}
      </div>
      <div>
        <h3 className="mb-2 text-base font-normal uppercase leading-5 text-[#757575]">
          Chọn loại
        </h3>
        <div className="mt-3 flex flex-shrink-0 flex-wrap items-center gap-2">
          {thumbnails?.map((thumb, idx) => (
            <div
              key={idx}
              className={`h-[70px] w-[70px] cursor-pointer rounded ${thumbIndex === idx ? "relative border-2 border-solid border-red-400" : ""}`}
              onClick={() => {
                setMainImage(thumb);
                setThumbIndex(idx);
              }}
            >
              <img
                src={thumb}
                alt={`thumb-${idx}`}
                className="h-full w-full object-cover"
              />
              {thumbIndex === idx && (
                <div className="absolute bottom-0 right-0">
                  <div
                    className="relative h-5 w-5 bg-red-600"
                    style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                  >
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/ec6dc144acb66ebd1687.svg"
                      alt="check"
                      className="absolute bottom-[1px] right-[1px] h-[10px] w-[10px]"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 text-base font-normal leading-5 text-[#757575]">
          Số Lượng
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex h-8 w-8 items-center justify-center rounded border"
            onClick={() => setCount((prev) => (prev === 1 ? prev : prev - 1))}
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
          <span className="w-8 text-center">{count}</span>
          <button
            className="flex h-8 w-8 items-center justify-center rounded border"
            onClick={() =>
              setCount((prev) =>
                prev >= data?.data?.quantity ? prev : prev + 1,
              )
            }
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
          <span className="ml-3 text-gray-500">
            {data?.data?.quantity} sản phẩm có sẵn
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-[10px] rounded border border-[#ee4d2d] bg-[#ff57221a] px-5 py-3 text-[#ee4d2d] hover:bg-red-50"
          onClick={async () => {
            const res = await addToCart({
              product_id: id,
              buy_count: count,
            }).unwrap();
            dispatch(openSnackbar({ message: res?.message }));
            refetch();
          }}
        >
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/f600cbfffbe02cc144a1.svg"
            alt=""
            className="h-5"
          />
          Thêm Vào Giỏ Hàng
        </button>
        <button className="w-[180px] rounded bg-[#f05d40] py-3 text-white hover:bg-red-600">
          Mua Ngay
        </button>
      </div>
    </div>
  );
}
