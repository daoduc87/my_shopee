import { Rate } from "antd";
import { useState } from "react";
import ProductOption from "./ProductOption";
import { useGetProductDetailQuery } from "../../services/rootApi";
import { useParams } from "react-router";
import CalculateDiscount from "../CalculateDiscount";

export default function ProductSummary() {
  const { id } = useParams();
  const { data } = useGetProductDetailQuery({ productId: id });
  const thumbnails = data?.data.images;
  const [mainImage, setMainImage] = useState(thumbnails?.[0]);
  const [thumbIndex, setThumbIndex] = useState(0);
  return (
    <div className="mx-auto mt-[30px] max-w-screen-xl rounded-lg bg-white py-6 pl-6 pr-[35px] shadow">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="w-[450px]">
          <img
            src={mainImage || data?.data.image}
            alt="product"
            className="w-[450px] object-cover"
          />
          <div className="mt-3 flex flex-shrink-0 flex-wrap items-center gap-2">
            {thumbnails?.map((thumb: string, idx: number) => (
              <div
                key={idx}
                className={`h-[70px] w-[70px] cursor-pointer overflow-hidden rounded ${thumbIndex === idx ? "border-2 border-solid border-red-400" : ""}`}
                onMouseEnter={() => {
                  setMainImage(thumb);
                  setThumbIndex(idx);
                }}
              >
                <img
                  src={thumb}
                  alt={`thumb-${idx}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-xl font-medium leading-snug">
            {data?.data.name}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-[5px]">
              <span className="text-base font-light text-[#222]">
                {data?.data.rating}
              </span>
              <Rate
                disabled
                value={Number(data?.data.rating)}
                className="text-[14px] text-[#ffb91e]"
              />
            </div>

            <div className="relative flex items-center gap-1">
              <p>
                Đã Bán&nbsp;
                <span className="text-base font-light text-[#222]">
                  {data?.data.sold}
                </span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 cursor-pointer text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <title>Thông tin</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>
          <div className="rounded bg-gray-100 p-4">
            <div className="flex items-center gap-4">
              <span className="text-[30px] font-medium text-primaryColor">
                ₫ {data?.data.price.toLocaleString("vi-VN")}
              </span>
              <span className="text-gray-400 line-through">
                ₫ {data?.data.price_before_discount}
              </span>
              <CalculateDiscount
                oldPrice={data?.data.price_before_discount}
                price={data?.data.price}
              />
            </div>
          </div>
          <ProductOption
            thumbnails={thumbnails}
            setMainImage={setMainImage}
            thumbIndex={thumbIndex}
            setThumbIndex={setThumbIndex}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}
