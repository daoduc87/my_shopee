import { useGetProductsQuery } from "../../services/rootApi";
import { Link } from "react-router";
import ProductItem from "../products/ProductItem";

export default function MostPurchased() {
  const { data } = useGetProductsQuery({ limit: 30, sort_by: "sold" });
  const MostPurchasedProducts = data?.data.products.slice(0, 5);
  return (
    <div className="mx-auto mt-6 max-w-screen-xl bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="mb-4 text-lg font-medium uppercase text-primaryColor">
          Được mua nhiều nhất
        </div>
        <Link to={"/most-purchased"}>
          <div className="cursor-pointer text-sm text-red-500">
            Xem tất cả &gt;
          </div>
        </Link>
      </div>
      <ProductItem paginationProducts={MostPurchasedProducts} />
    </div>
  );
}
