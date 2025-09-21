import { useReadPurchasesQuery } from "../../services/rootApi";

export default function CanceledProducts() {
  const { data } = useReadPurchasesQuery({ status: 5 });
  if (!data?.data || data.data.length === 0) {
    return (
      <p className="mt-10 text-center text-lg font-normal">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/orderlist/4751043c866ed52f9661.png"
          alt="empty"
          className="mx-auto mb-5 w-[100px]"
        />
        Chưa có đơn hàng
      </p>
    );
  }
  return <div>CanceledProducts</div>;
}
