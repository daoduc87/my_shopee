import { useState } from "react";
import type { queryState } from "../../pages/ProductCategory";

interface IPropSetQuery {
  setQuery: React.Dispatch<React.SetStateAction<queryState>>;
}
export default function SortBar({ setQuery }: IPropSetQuery) {
  const [activeSort, setActiveSort] = useState("");
  return (
    <div className="mb-4 flex items-center justify-between rounded bg-[#ededed] p-2 text-sm">
      <div className="flex items-center space-x-2">
        <span>Sắp xếp theo</span>
        <button
          className={`rounded px-3 py-1 ${activeSort === "popular" ? "bg-primaryColor text-white" : "bg-white"}`}
          onClick={() => {
            setActiveSort("popular");
            setQuery((prev) => ({ ...prev, sort_by: "view" }));
          }}
        >
          Phổ Biến
        </button>
        <button
          className={`rounded border px-3 py-1 ${activeSort === "new" ? "bg-primaryColor text-white" : "bg-white"}`}
          onClick={() => {
            setActiveSort("new");
            setQuery((prev) => ({ ...prev, sort_by: "createdAt" }));
          }}
        >
          Mới Nhất
        </button>
        <button
          className={`rounded border px-3 py-1 ${activeSort === "sold" ? "bg-primaryColor text-white" : "bg-white"}`}
          onClick={() => {
            setActiveSort("sold");
            setQuery((prev) => ({ ...prev, sort_by: "sold" }));
          }}
        >
          Bán Chạy
        </button>
        <select
          className="rounded border px-2 py-1"
          onChange={(e) => {
            if (e.target.value === "tăng") {
              setQuery((prev) => ({ ...prev, sort_by: "price", order: "asc" }));
            }
            if (e.target.value === "giảm") {
              setQuery((prev) => ({
                ...prev,
                sort_by: "price",
                order: "desc",
              }));
            }
          }}
        >
          <option value="giá">Giá</option>
          <option value="tăng">Giá: Thấp đến Cao</option>
          <option value="giảm">Giá: Cao đến Thấp</option>
        </select>
      </div>
    </div>
  );
}
