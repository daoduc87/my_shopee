import { useState } from "react";
import { useProductCategory } from "../context/ProductCategoryProvider";
import { useGetProductsQuery } from "../services/rootApi";

import SortBar from "../components/products/SortBar";

import { Pagination } from "antd";
import { useSearchParams } from "react-router";
import SidebarFilter from "../components/products/SidebarFilter";
import ProductItem from "../components/products/ProductItem";
import type { queryState } from "./ProductCategory";
import { Helmet } from "react-helmet";

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
interface filteredProductsType {
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
export default function FlashSalePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = parseInt(searchParams.get("page") ?? "1") || 1;
  const pageSize = parseInt(searchParams.get("pageSize") ?? "10") || 10;
  const [query, setQuery] = useState<queryState>({
    page: 1,
  });
  const { data } = useGetProductsQuery(query);
  const { selectedCategory } = useProductCategory()!;
  const products = data?.data?.products || [];
  const filteredProducts = selectedCategory
    ? data?.data.products.filter(
        (pro: RootObject) => pro.category.name === selectedCategory,
      )
    : products;
  const saleProducts = filteredProducts.filter(
    (pro: filteredProductsType) => pro.price < pro.price_before_discount,
  );
  let start = (current - 1) * pageSize;
  const paginationProducts = saleProducts?.slice(start, start + pageSize);
  return (
    <div className="mx-auto mt-[30px] flex max-w-screen-xl">
      <Helmet>
        <title>Sản Phẩm Đang Ưu Đãi Lớn</title>
        <meta
          name="description"
          content="Đây là trang dành cho các sản phẩm đang có ưu đãi lớn, hãy khám phá"
        />
      </Helmet>
      <div className="w-[250px]">
        <SidebarFilter setQuery={setQuery} />
      </div>
      <div className="flex-1 px-5">
        <SortBar setQuery={setQuery} />
        <ProductItem paginationProducts={paginationProducts} />
        <Pagination
          align="center"
          defaultCurrent={1}
          total={filteredProducts?.length}
          className="mt-6"
          current={current}
          pageSize={pageSize}
          onChange={(page, pageSize) => {
            setSearchParams({
              page: page.toString(),
              pageSize: pageSize.toString(),
            });
          }}
        />
      </div>
    </div>
  );
}
