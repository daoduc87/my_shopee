import { vi } from "date-fns/locale/vi";
import { format } from "date-fns/format";
export default function DeliveryTime() {
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
  const resultStartDate = format(startDate, "dd MMM", {
    locale: vi,
  });
  const resultEndDate = format(endDate, "dd MMM", {
    locale: vi,
  });
  return (
    <div>
      <span className="flex gap-2 font-normal text-[#222]">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/f1f65ec969d238ed62ff.svg"
          alt=""
          className="h-5 w-5"
        />
        Nhận từ {resultStartDate} - {resultEndDate}
      </span>
      <span className="block text-green-600">Phí ship 0₫</span>
      <p className="mb-3 text-gray-500">
        Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.
      </p>
    </div>
  );
}
