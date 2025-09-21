import { Link } from "react-router";
import { useReadPurchasesQuery } from "../../services/rootApi";
import WaitingApprove from "./WaitingApprove";
import slugify from "slugify";
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
export default function WaitingApproveList() {
  const { data } = useReadPurchasesQuery({ status: 1 });
  return (
    <div className="space-y-4">
      {data?.data.map((item: RootObject) => (
        <Link
          to={`/${slugify(item.product.name, { locale: "vi" })}/${item.product._id}`}
          className="block"
        >
          <WaitingApprove item={item} key={item._id} />
        </Link>
      ))}
    </div>
  );
}
