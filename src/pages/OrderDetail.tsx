import { Helmet } from "react-helmet";
import OrderInformation from "../components/order/OrderInformation";

export default function OrderDetail() {
  return (
    <>
      <Helmet>
        <title>Đơn Đặt Hàng Chi Tiết</title>
        <meta
          name="description"
          content="Đây là trang tổng kết về đơn đặt hàng của bạn"
        />
      </Helmet>
      <div className="flex-1">
        <OrderInformation />
      </div>
    </>
  );
}
