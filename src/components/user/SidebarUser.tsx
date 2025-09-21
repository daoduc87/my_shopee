import { Link, useLocation } from "react-router";
import UserAvatar from "../UserAvatar";
import { useAppSelector } from "../../redux/store";
import { useGetMeQuery } from "../../services/rootApi";

const sidebarMenu = [
  {
    image:
      "https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4",
    label: "Tài Khoản Của Tôi",
    link: "/user/account/profile",
  },
  {
    image:
      "https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078",
    label: "Đơn Mua",
    link: "/user/order",
  },
  {
    image:
      "https://e7.pngegg.com/pngimages/895/334/png-clipart-brown-key-with-padlock-illustration-password-manager-computer-icons-computer-security-forgot-password-svg-free-miscellaneous-text-thumbnail.png",
    label: "Đổi Mật Khẩu",
    link: "/user/password",
  },
];
export default function SidebarUser() {
  const { data } = useGetMeQuery();
  const userInfo = useAppSelector((state) => state.auth.userInfo.data);
  const location = useLocation();
  const activeMenu = sidebarMenu.find(
    (menu) => menu.link === location.pathname,
  );
  return (
    <div className="w-[180px]">
      <div className="flex items-center gap-[15px]">
        <UserAvatar className="flex-shrink-0 text-xl" size={50} />
        <div>
          <p className="mb-[5px] break-all font-bold">
            {data?.data.name || userInfo?.email}
          </p>
          <button className="flex text-nowrap text-[#888]">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 4, marginTop: 3 }}
            >
              <path
                d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                fill="#9B9B9B"
                fillRule="evenodd"
              />
            </svg>
            Sửa hồ sơ
          </button>
        </div>
      </div>
      <div className="mt-11 space-y-4">
        {sidebarMenu.map((item, index) => (
          <Link
            key={`${item.label}${index}`}
            to={`${item.link}`}
            className="block"
          >
            <p
              className={`flex items-center gap-3 ${activeMenu?.label === item.label ? "text-primaryColor" : ""}`}
            >
              <img src={item.image} alt={item.label} className="h-5 w-5" />
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
