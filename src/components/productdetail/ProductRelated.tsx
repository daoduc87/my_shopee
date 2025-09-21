import { useGetProductsQuery } from "../../services/rootApi";
import { Pagination } from "antd";
import { useSearchParams } from "react-router";
import ProductItem from "../products/ProductItem";

interface IPropCategoryId {
  categoryId: string;
}
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
export default function ProductRelated({ categoryId }: IPropCategoryId) {
  const { data } = useGetProductsQuery({ page: 1, category: categoryId });
  const [searchParams, setSearchParams] = useSearchParams();
  const current = parseInt(searchParams.get("page") ?? "1") || 1;
  const pageSize = parseInt(searchParams.get("pageSize") ?? "10") || 10;
  const products = data?.data?.products || [];
  const RelatedProducts = products.filter(
    (pro: RootObject) => pro.category._id === categoryId,
  );

  let start = (current - 1) * pageSize;
  const paginationProducts = RelatedProducts?.slice(start, start + pageSize);

  return (
    <div className="mx-auto mt-5 max-w-screen-xl">
      <h3 className="text-base font-medium uppercase text-[#0000008a]">
        Có thể bạn cũng thích
      </h3>
      <ProductItem paginationProducts={paginationProducts} />
      <Pagination
        align="center"
        defaultCurrent={1}
        total={RelatedProducts?.length}
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
  );
}
