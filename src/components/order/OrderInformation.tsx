import { Tabs, type TabsProps } from "antd";
import WaitingApproveList from "./WaitingApproveList";
import AllProductsUser from "./AllProductsUser";
import GettingGoods from "./GettingGoods";
import WaitingDelivery from "./WaitingDelivery";
import CompletedDelivery from "./CompletedDelivery";
import CanceledProducts from "./CanceledProducts";

export default function OrderInformation() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tất cả",
      children: <AllProductsUser />,
    },
    {
      key: "2",
      label: "Chờ Xác nhận",
      children: <WaitingApproveList />,
    },
    {
      key: "3",
      label: "Đang lấy hàng",
      children: <GettingGoods />,
    },
    {
      key: "4",
      label: "Chờ giao hàng",
      children: <WaitingDelivery />,
    },
    {
      key: "5",
      label: "Hoàn thành",
      children: <CompletedDelivery />,
    },
    {
      key: "6",
      label: "Đã hủy",
      children: <CanceledProducts />,
    },
  ];
  return (
    <>
      <Tabs
        defaultActiveKey="2"
        items={items}
        // className="bg-gray-50 p-6"
      />
    </>
  );
}
