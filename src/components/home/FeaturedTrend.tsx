import { useGetProductsQuery } from "../../services/rootApi";
import { Link } from "react-router";
import ProductItem from "../products/ProductItem";

export default function FeaturedTrend() {
  const { data } = useGetProductsQuery({ limit: 30, sort_by: "view" });
  const FeaturedProducts = data?.data.products.slice(5, 10);
  return (
    <div className="mx-auto mt-6 max-w-screen-xl bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="mb-4 text-lg font-medium uppercase text-primaryColor">
          Xu hướng mua sắm nổi bật
        </div>
        <Link to={"/featured"}>
          <div className="cursor-pointer text-sm text-red-500">
            Xem tất cả &gt;
          </div>
        </Link>
      </div>
      <ProductItem paginationProducts={FeaturedProducts} />
    </div>
  );
}
