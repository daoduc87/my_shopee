import { useState } from "react";
import { Rate } from "antd";
import { useProductCategory } from "../../context/ProductCategoryProvider";
import { useParams } from "react-router";
import type { queryState } from "../../pages/ProductCategory";

interface IPropSetQuery {
  setQuery: React.Dispatch<React.SetStateAction<queryState>>;
}
export default function SidebarFilter({ setQuery }: IPropSetQuery) {
  const { handleCategory } = useProductCategory()!;
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [productName, setProductName] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [rating, setRating] = useState("");
  const { categoryId } = useParams();
  return (
    <aside className="w-[250px] overflow-y-auto border-r bg-white p-4 text-sm leading-6">
      <div>
        <div className="flex gap-2">
          <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x={0}
            y={0}
            className="mt-1 h-4 w-3 fill-current stroke-current"
          >
            <g>
              <polyline
                fill="none"
                points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
            </g>
          </svg>

          <h2 className="mb-3 font-bold text-black">BỘ LỌC TÌM KIẾM</h2>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Danh mục</h3>
          <ul className="space-y-1 text-[#000000cc]">
            <li
              className="cursor-pointer hover:text-[#ee4d2d]"
              onClick={() => handleCategory("Điện thoại")}
            >
              Điện thoại
            </li>
            <li
              className="cursor-pointer hover:text-[#ee4d2d]"
              onClick={() => handleCategory("Điện thoại")}
            >
              Máy tính bảng
            </li>
            <li
              className="cursor-pointer hover:text-[#ee4d2d]"
              onClick={() => handleCategory("Điện thoại")}
            >
              Laptop
            </li>
            <li
              className="cursor-pointer hover:text-[#ee4d2d]"
              onClick={() => handleCategory("Đồng hồ")}
            >
              Đồng hồ
            </li>
            <li
              className="cursor-pointer hover:text-[#ee4d2d]"
              onClick={() => handleCategory("Áo thun")}
            >
              Áo thun
            </li>
            <li className="cursor-pointer hover:text-[#ee4d2d]">Khác</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Sắp xếp theo</h3>
          {["createdAt", "view", "sold", "price"].map((field) => (
            <label key={field} className="block cursor-pointer">
              <input
                type="radio"
                name="sort_by"
                className="mr-2 accent-primaryColor"
                value={field}
                checked={sortBy === field}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setQuery((prev) => ({ ...prev, sort_by: field }));
                }}
              />
              {field}
            </label>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Thứ tự</h3>
          {["asc", "desc"].map((order) => (
            <label key={order} className="block cursor-pointer">
              <input
                type="radio"
                name="order"
                className="mr-2 accent-primaryColor"
                value={order}
                checked={orderBy === order}
                onChange={(e) => {
                  setOrderBy(e.target.value);
                  setQuery((prev) => ({ ...prev, order: order }));
                }}
              />
              {order}
            </label>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Đánh giá từ</h3>
          <div className="flex flex-col gap-2">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="rating_filter"
                className="accent-primaryColor"
                value={"5"}
                checked={rating === "5"}
                onChange={(e) => {
                  setRating(e.target.value);
                  setQuery((prev) => ({
                    ...prev,
                    rating_filter: Number(e.target.value),
                  }));
                }}
              />
              <Rate
                disabled
                defaultValue={5}
                className="text-[14px] text-[#ffb91e]"
              />
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="rating_filter"
                className="accent-primaryColor"
                value={"4"}
                checked={rating === "4"}
                onChange={(e) => {
                  setRating(e.target.value);

                  setQuery((prev) => ({
                    ...prev,
                    rating_filter: Number(e.target.value),
                  }));
                }}
              />
              <Rate
                disabled
                defaultValue={4}
                className="text-[14px] text-[#ffb91e]"
              />
              <span className="text-sm text-gray-700">trở lên</span>
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="rating_filter"
                className="accent-primaryColor"
                value={"3"}
                checked={rating === "3"}
                onChange={(e) => {
                  setRating(e.target.value);
                  setQuery((prev) => ({
                    ...prev,
                    rating_filter: Number(e.target.value),
                  }));
                }}
              />
              <Rate
                disabled
                defaultValue={3}
                className="text-[14px] text-[#ffb91e]"
              />
              <span className="text-sm text-gray-700">trở lên</span>
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="rating_filter"
                className="accent-primaryColor"
                value={"2"}
                checked={rating === "2"}
                onChange={(e) => {
                  setRating(e.target.value);

                  setQuery((prev) => ({
                    ...prev,
                    rating_filter: Number(e.target.value),
                  }));
                }}
              />
              <Rate
                disabled
                defaultValue={2}
                className="text-[14px] text-[#ffb91e]"
              />
              <span className="text-sm text-gray-700">trở lên</span>
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="rating_filter"
                className="accent-primaryColor"
                value={"1"}
                checked={rating === "1"}
                onChange={(e) => {
                  setRating(e.target.value);

                  setQuery((prev) => ({
                    ...prev,
                    rating_filter: Number(e.target.value),
                  }));
                }}
              />
              <Rate
                disabled
                defaultValue={1}
                className="text-[14px] text-[#ffb91e]"
              />
              <span className="text-sm text-gray-700">trở lên</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Khoảng giá</h3>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="₫ TỪ"
              className="w-20 border p-1 text-center text-xs"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
            />
            <span>-</span>
            <input
              type="number"
              placeholder="₫ ĐẾN"
              className="w-20 border p-1 text-center text-xs"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
            />
          </div>
          <button
            className="mt-2 w-full rounded bg-[#ee4d2d] py-1 text-xs font-medium text-white"
            onClick={() => {
              setQuery((prev) => ({
                ...prev,
                price_min: Number(priceMin),
                price_max: Number(priceMax),
              }));
            }}
          >
            ÁP DỤNG
          </button>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Tìm theo tên</h3>
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            className="w-full border p-1 text-xs"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
              setQuery((prev) => ({ ...prev, name: productName }));
            }}
          />
        </div>
        <button
          className="w-full rounded border bg-primaryColor py-1 text-xs font-medium text-white"
          onClick={() => {
            setPriceMin("");
            setPriceMax("");
            setProductName("");
            setSortBy("");
            setOrderBy("");
            setRating("");
            handleCategory("");
            setQuery({ category: categoryId });
          }}
        >
          XÓA TẤT CẢ
        </button>
      </div>
    </aside>
  );
}
