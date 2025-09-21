import SortBar from "../components/products/SortBar";
import { useGetProductsQuery } from "../services/rootApi";
import { useParams, useSearchParams } from "react-router";
import { useProductCategory } from "../context/ProductCategoryProvider";
import { Pagination } from "antd";
import { useState } from "react";
import SidebarFilter from "../components/products/SidebarFilter";
import ProductItem from "../components/products/ProductItem";
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
export interface queryState {
  category?: string;
  page?: number;
  limit?: number;
  sort_by?: string;
  rating_filter?: number;
  price_max?: number;
  price_min?: number;
  name?: string;
}
export default function ProductCategory() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const current = parseInt(searchParams.get("page") ?? "1") || 1;
  const pageSize = parseInt(searchParams.get("pageSize") ?? "10") || 10;
  const [query, setQuery] = useState<queryState>({
    category: categoryId,
  });
  const { data } = useGetProductsQuery(query);
  const { selectedCategory } = useProductCategory()!;
  const products = data?.data?.products || [];
  const filteredProducts = selectedCategory
    ? data?.data.products.filter(
        (pro: RootObject) => pro.category.name === selectedCategory,
      )
    : products;
  let start = (current - 1) * pageSize;
  const paginationProducts = filteredProducts?.slice(start, start + pageSize);
  return (
    <div className="mx-auto mt-[30px] flex max-w-screen-xl">
      <Helmet>
        <title>Danh Mục Sản Phẩm</title>
        <meta
          name="description"
          content="Đây là trang danh mục sản phẩm, thống kê các loại sản phẩm có trong shop"
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
          // defaultCurrent={1}
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
