import { useAppSelector } from "../../redux/store";
import { useGetMeQuery } from "../../services/rootApi";

export default function AddressSection() {
  const userInfo = useAppSelector((state) => state.auth.userInfo.data);
  const { data } = useGetMeQuery();
  return (
    <div className="rounded-lg bg-white shadow">
      <div
        className="h-[3px] w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #6fa6d6, #6fa6d6 33px, transparent 0, transparent 41px, #f18d9b 0, #f18d9b 74px, transparent 0, transparent 82px)",
        }}
      ></div>
      <div className="p-6">
        <div className="mb-5 flex items-center gap-2 text-lg">
          <svg
            height={16}
            viewBox="0 0 12 16"
            width={12}
            className="fill-current text-[#ee4d2d]"
          >
            <path
              d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"
              fillRule="evenodd"
            />
          </svg>
          <h2 className="text-lg text-primaryColor">Địa Chỉ Nhận Hàng</h2>
        </div>
        <div className="flex items-center gap-10">
          {data?.data.name && data?.data.phone ? (
            <p className="font-bold text-[#222]">
              {data.data.name} (+84) {data.data.phone}
            </p>
          ) : (
            <p className="font-bold text-[#222]">{userInfo.email}</p>
          )}
          <p>
            {data?.data.address}
            <span className="ml-3 border border-solid border-primaryColor p-1 text-xs text-primaryColor">
              Mặc Định
            </span>
          </p>
          <button className="text-[#05a]">Thay đổi</button>
        </div>
      </div>
    </div>
  );
}
