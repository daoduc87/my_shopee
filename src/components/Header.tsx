import { Badge, Dropdown, Popover } from "antd";
import LanguageIcon from "@mui/icons-material/Language";
import UserAvatar from "./UserAvatar";
import Logout from "./Logout";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import {
  useGetProductsQuery,
  useReadPurchasesQuery,
} from "../services/rootApi";
import CartDropdown from "./header/CartDropdown";
import { useAppSelector } from "../redux/store";
import { useState } from "react";
import slugify from "slugify";
const items = [
  {
    key: "1",
    label: <a href="/user">Tài Khoản Của Tôi</a>,
  },
  {
    key: "2",
    label: <a href="/user/order">Đơn Mua</a>,
  },
  {
    key: "3",
    label: <Logout />,
  },
];
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
export default function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const userInfo = useAppSelector((state) => state.auth.userInfo.data);
  const favoriteIdsList = useAppSelector(
    (state) => state.favorite.favoriteIdsList,
  );
  const { data: dataGetProducts } = useGetProductsQuery({ name: inputSearch });
  const { data } = useReadPurchasesQuery({ status: -1 });
  const content = (
    <div className="space-y-3">
      {dataGetProducts?.data.products.map((product: RootObject) => {
        return (
          favoriteIdsList.includes(product._id) && (
            <Link
              to={`/${slugify(product.name, { locale: "vi" })}/${product._id}`}
              className="block"
            >
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-10 w-10"
                />
                <p className="line-clamp-2 max-w-[320px]">{product.name}</p>
              </div>
            </Link>
          )
        );
      })}
    </div>
  );
  return (
    <>
      <header className="shopee-top w-full text-sm text-white">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2">
          <div className="flex gap-3">
            <a href="#!" className="hover:underline">
              Kênh Người Bán
            </a>
            <span>|</span>
            <a href="#!" className="hover:underline">
              Tải ứng dụng
            </a>
            <span>|</span>
            <span>Kết nối</span>
            <a
              href="https://www.facebook.com/ShopeeVN"
              className="ml-1"
              target="_blank"
              rel="noopener"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="inline h-4 w-4"
              />
            </a>
            <a
              href="https://www.instagram.com/Shopee_VN/"
              className="ml-1"
              target="_blank"
              rel="noopener"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="inline h-4 w-4"
              />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://help.shopee.vn/portal/4/vn/s"
              className="hover:underline"
              target="_blank"
              rel="noopener"
            >
              Hỗ Trợ
            </a>
            <a href="#!" className="flex items-center gap-1 hover:underline">
              <LanguageIcon />
              Tiếng Việt
            </a>
            <Popover content={content} title="Bộ sưu tập yêu thích của bạn">
              <Badge count={favoriteIdsList.length}>
                <HeartOutlined className="text-2xl text-white" />
              </Badge>
            </Popover>
            <Dropdown
              menu={{ items }}
              placement="bottomRight"
              overlayClassName="avatar"
              arrow
            >
              <div className="flex items-center gap-1">
                <UserAvatar />
                <span className="font-semibold">
                  {userInfo?.name || userInfo?.email}
                </span>
              </div>
            </Dropdown>
          </div>
        </div>
        <div>
          <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-8 px-4 py-4">
            <Link to={"/home"}>
              <div className="flex items-center gap-2">
                <img
                  src="https://freelogopng.com/images/all_img/1656181355shopee-icon-white.png"
                  alt="Shopee"
                  className="mb-2 h-11 w-11"
                />
                <span className="text-3xl font-medium text-white">Shopee</span>
              </div>
            </Link>
            <div className="relative mx-auto flex-1">
              <div className="relative mx-10">
                <Dropdown
                  popupRender={() =>
                    inputSearch && (
                      <div className="bg-white shadow-md">
                        {dataGetProducts.data.products
                          .slice(0, 10)
                          .map((item: RootObject) => (
                            <Link
                              to={`/${slugify(item.name, { locale: "vi" })}/${item._id}`}
                              key={item._id}
                            >
                              <p className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-[#000000de] hover:bg-gray-100">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-10 w-10"
                                />
                                {item.name}
                              </p>
                            </Link>
                          ))}
                      </div>
                    )
                  }
                >
                  <input
                    type="text"
                    placeholder="SUNHOUSE - ĐẠI HỘI SALE"
                    className="w-full rounded-sm border-none px-4 py-3 pr-[100px] text-black"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                  />
                </Dropdown>
                <button className="absolute right-[2px] top-[2px] flex h-[40px] w-[66px] items-center justify-center rounded-sm bg-primaryColor">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
                    alt="Search"
                    className="h-4 w-4 invert"
                  />
                </button>
              </div>
            </div>
            <Dropdown
              popupRender={() => (
                <div>
                  <CartDropdown />
                </div>
              )}
              placement="bottomRight"
              overlayClassName="cart"
              trigger={["click"]}
            >
              <div className="cursor-pointer">
                <Badge
                  count={
                    <span className="rounded-full bg-white px-2 py-[2px] text-xs font-bold text-red-500">
                      {data?.data.length}
                    </span>
                  }
                  className="mr-16"
                >
                  <ShoppingCartOutlined className="text-[32px] text-white" />
                </Badge>
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="mx-auto ml-14 flex text-xs text-white">
          <div className="mx-auto flex max-w-screen-xl flex-wrap gap-5 py-1">
            <Link to="/products" className="hover:underline">
              Cosplay Nữ
            </Link>
            <Link to="/products" className="hover:underline">
              Giày Samba Nam
            </Link>
            <Link to="/products" className="hover:underline">
              Áo Khoác
            </Link>
            <Link to="/products" className="hover:underline">
              Áo Thun Nam TAOBAO
            </Link>
            <Link to="/products" className="hover:underline">
              Áo Cotton 100%
            </Link>
            <Link to="/products" className="hover:underline">
              iPhone 14 Pro Max
            </Link>
            <Link to="/products" className="hover:underline">
              Quần Jean Nam
            </Link>
            <Link to="/products" className="hover:underline">
              Áo Sơ Mi Nam
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
