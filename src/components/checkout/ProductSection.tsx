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
interface IPropsProductCheckType {
  productChecked: RootObject;
}
export default function ProductSection({
  productChecked,
}: IPropsProductCheckType) {
  return (
    <div className="grid grid-cols-12 items-center gap-5 rounded-sm border border-solid border-gray-200 p-5">
      <div className="col-span-6 flex items-center gap-3">
        <img
          src={productChecked.product.image}
          alt={productChecked.product.name}
          className="h-[80px] w-[80px] object-cover"
        />
        <p className="line-clamp-2">{productChecked.product.name}</p>
      </div>
      <div className="col-span-2">
        <p>{productChecked.price.toLocaleString("vi-VN")}₫</p>
      </div>
      <div className="col-span-2 ml-6 flex items-center">
        {productChecked.buy_count}
      </div>
      <div className="col-span-2">
        <span>
          {(productChecked.price * productChecked.buy_count).toLocaleString(
            "vi-VN",
          )}
          ₫
        </span>
      </div>
    </div>
  );
}
