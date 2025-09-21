import { useGetCategoryQuery } from "../../services/rootApi";
import { Link } from "react-router";
import { useProductCategory } from "../../context/ProductCategoryProvider";
import { ShopOutlined } from "@ant-design/icons";
const images = [
  {
    id: 1,
    img: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w640_nl.webp",
  },
  {
    id: 2,
    img: "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260@resize_w640_nl.webp",
  },
  {
    id: 3,
    img: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w640_nl.webp",
  },
];
interface RootObject {
  _id: string;
  name: string;
}
export default function Category() {
  const { handleCategory } = useProductCategory()!;
  const { data } = useGetCategoryQuery();
  return (
    <div className="mx-auto mt-6 max-w-screen-xl rounded bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-lg font-medium uppercase text-primaryColor">
          Danh Mục
        </h2>
        <Link
          to="/products"
          className="flex items-center gap-1 text-sm font-medium text-primaryColor hover:underline"
        >
          <ShopOutlined className="-mt-1" />
          Đến shop ngay &gt;
        </Link>
      </div>
      <div className="flex gap-16">
        {data?.data.map((cat: RootObject, index: number) => (
          <Link
            key={cat._id}
            to={`/category/${cat._id}`}
            onClick={() => handleCategory(`${cat.name}`)}
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 h-32 w-32">
                <img
                  src={images[index]?.img}
                  alt={cat.name}
                  className="h-full w-full rounded-lg bg-gray-100 object-contain p-1"
                />
              </div>
              <span className="text-center text-sm font-medium uppercase leading-4 text-gray-700">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
