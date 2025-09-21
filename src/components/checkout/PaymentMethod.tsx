import { useState } from "react";

const paymentMethods = [
  {
    id: 1,
    label: "Thanh toán khi nhận hàng",
  },
  {
    id: 2,
    label: "Chuyển khoản ngân hàng",
  },
];
export default function PaymentMethod() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>(
    "Thanh toán khi nhận hàng",
  );
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h2 className="mb-3 text-lg font-semibold">Phương thức thanh toán</h2>
      <div className="inline-block">
        <div className="mb-4 flex space-x-4 text-sm">
          {paymentMethods.map((paymentMethod) =>
            selectedPaymentMethod === paymentMethod.label ? (
              <button
                className={`relative h-[2.5rem] rounded border border-solid border-primaryColor px-3 py-1`}
                key={paymentMethod.id}
                onClick={() => setSelectedPaymentMethod(paymentMethod.label)}
              >
                {paymentMethod.label}
                <div className="absolute bottom-0 right-0">
                  <div
                    className="relative h-5 w-5 bg-primaryColor"
                    style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                  >
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/ec6dc144acb66ebd1687.svg"
                      alt="check"
                      className="absolute bottom-[1px] right-[1px] h-[10px] w-[10px]"
                    />
                  </div>
                </div>
              </button>
            ) : (
              <button
                className={`h-[2.5rem] rounded border px-3 py-1`}
                key={paymentMethod.id}
                onClick={() => setSelectedPaymentMethod(paymentMethod.label)}
              >
                {paymentMethod.label}
              </button>
            ),
          )}
        </div>
        {selectedPaymentMethod === "Chuyển khoản ngân hàng" && (
          <img
            src="https://img.vietqr.io/image/BIDV-8874413045-compact.png"
            alt=""
            className="ml-auto w-[200px]"
          />
        )}
      </div>
    </div>
  );
}
