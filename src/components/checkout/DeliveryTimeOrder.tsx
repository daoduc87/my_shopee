import { vi } from "date-fns/locale/vi";
import { format } from "date-fns/format";
export default function DeliveryTimeOrder() {
  let now = new Date();
  let startDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 4,
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  );
  let endDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 7,
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  );
  const resultStartDate = format(startDate, "dd MMMM", {
    locale: vi,
  });
  const resultEndDate = format(endDate, "dd MMMM", {
    locale: vi,
  });
  let year = now.getFullYear();
  return (
    <div>
      <p className="flex gap-2 text-sm text-[#26aa99]">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/checkout/a714965e439d493ba00c.svg"
          alt=""
        />
        Đảm bảo nhận hàng từ {resultStartDate} - {resultEndDate}
      </p>
      {/* <span className="block text-green-600">Phí ship 0₫</span> */}
      <p className="mb-3 text-gray-500">
        Nhận Voucher trị giá 15.000₫ nếu đơn hàng được giao đến bạn sau&nbsp;
        {resultStartDate} {year}.
      </p>
    </div>
  );
}
