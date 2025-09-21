import DeliveryTimeOrder from "./DeliveryTimeOrder";

const shipFee = 25000;
export default function ShippingMethod() {
  return (
    <div className="flex items-start gap-6 rounded-lg bg-white p-4 shadow">
      <div className="flex w-[35%] items-center gap-4">
        <span className="text-nowrap text-sm">Lời nhắn:</span>
        <input
          className="h-[40px] w-full rounded border border-solid border-[#00000024] px-3 py-1 text-sm text-[#222] shadow-sm"
          placeholder="Lưu ý cho Người bán..."
        />
      </div>
      <div className="flex flex-1 justify-between text-sm">
        <div className="flex gap-3 font-medium">
          <p className="text-nowrap font-medium">Phương thức vận chuyển:</p>
          <div className="w-[450px] space-y-1">
            <div className="flex justify-between">
              <span className="font-normal">Nhanh</span>
              <button className="text-nowrap text-[#05a] hover:underline">
                Thay Đổi
              </button>
            </div>
            <DeliveryTimeOrder />
          </div>
        </div>
        <p className="font-medium">{shipFee.toLocaleString("vi-VN")}₫</p>
      </div>
    </div>
  );
}
