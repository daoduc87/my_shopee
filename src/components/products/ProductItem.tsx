import { Link } from "react-router";
import slugify from "slugify";
import { HeartTwoTone } from "@ant-design/icons";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/slices/FavoriteSlice";
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
interface IPropPaginationProduct {
  paginationProducts: RootObject[];
}
interface ProductItemType {
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
const ProductItem = ({ paginationProducts }: IPropPaginationProduct) => {
  const dispatch = useDispatch();
  const favoriteIdsList = useAppSelector(
    (state) => state.favorite.favoriteIdsList,
  );
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {paginationProducts?.map((product: ProductItemType) => (
        <div className="relative h-full cursor-pointer rounded-2xl bg-white p-3 shadow transition hover:shadow-lg">
          <Link
            to={`/${slugify(product.name, { locale: "vi" })}/${product._id}`}
            key={product._id}
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-3 h-40 w-full rounded-lg object-contain"
            />
            <h3 className="line-clamp-2 text-sm font-medium">{product.name}</h3>

            <div className="mt-2">
              <span className="mt-1 text-xs text-gray-400 line-through">
                {product?.price_before_discount.toLocaleString("vi-VN")}
              </span>
              <div className="flex items-center justify-between">
                <span className="font-bold text-red-500">
                  {product?.price.toLocaleString("vi-VN")}
                </span>
                <p className="text-[12px]">Đã bán {product.sold}</p>
              </div>
            </div>
          </Link>
          <HeartTwoTone
            className="absolute right-2 top-2"
            twoToneColor={` ${favoriteIdsList.includes(product._id) ? "#ef4444" : "#ccc"}`}
            onClick={() => dispatch(toggleFavorite(product._id))}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
