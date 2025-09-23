import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
import {
  useBuyProductsMutation,
  useReadPurchasesQuery,
} from "../../services/rootApi";
import { clearCartCount } from "../../redux/slices/CartCountSlice";
import { useNavigate } from "react-router";
import confetti from "canvas-confetti";
import { openSnackbar } from "../../redux/slices/SnackbarSlice";
import { clearBuyProductsNow } from "../../redux/slices/BuyProductNow";
import { clearBuyProducts } from "../../redux/slices/BuyProductsSlice";

interface RootObject {
  _id: string;
  buy_count: number;
  price: number;
  price_before_discount: number;
  status: number;
  user: string;
  product: Product;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Product {
  _id: string;
  images: string[];
  price: number;
  rating: number;
  price_before_discount: number;
  quantity: number;
  sold: number;
  view: number;
  name: string;
  description: string;
  category: Category;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Category {
  _id: string;
  name: string;
  __v: number;
}

interface Category {
  _id: string;
  name: string;
  __v: number;
}
const shipFee = 25000;
export default function TotalSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productsChecked = useAppSelector((state) => state.buy.buyProducts);
  const productBuyNow = useAppSelector((state) => state.buyNow.buyProducts);
  const totalSummary = productsChecked.reduce(
    (acc: number, productChecked: RootObject) => {
      return acc + productChecked.price * productChecked.buy_count;
    },
    0,
  );
  const totalSummaryBuyNow = productBuyNow.price * productBuyNow.buy_count;
  const { refetch: refetchCart } = useReadPurchasesQuery({ status: -1 });
  const { refetch } = useReadPurchasesQuery({ status: 1 });
  const [buyProducts] = useBuyProductsMutation();
  const handleOrder = async () => {
    await buyProducts(
      productsChecked.map((productChecked: RootObject) => ({
        product_id: productChecked.product._id,
        buy_count: productChecked.buy_count,
      })),
    ).unwrap();
    dispatch(openSnackbar({ message: "Bạn đã đặt hàng thành công" }));
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      ticks: 400,
    });
    navigate("/user/order");
    dispatch(clearCartCount());
    dispatch(clearBuyProducts());
    dispatch(clearBuyProductsNow());
    refetchCart();
    refetch();
  };
  const handleOrderNow = async () => {
    await buyProducts([
      { product_id: productBuyNow._id, buy_count: productBuyNow.buy_count },
    ]).unwrap();
    dispatch(openSnackbar({ message: "Bạn đã đặt hàng thành công" }));
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      ticks: 400,
    });
    navigate("/user/order");
    dispatch(clearBuyProducts());
    dispatch(clearBuyProductsNow());
    refetchCart();
    refetch();
  };
  return (
    <div className="rounded-lg bg-white p-8 shadow">
      <div className="mb-6 ml-auto w-full max-w-sm space-y-4 border-b border-solid border-gray-200 pb-[10px] text-sm text-[#0000008a]">
        <div className="flex justify-between">
          <span>Tổng tiền hàng</span>
          {totalSummary ? (
            <span>{totalSummary.toLocaleString("vi-VN")}₫</span>
          ) : (
            <span>{totalSummaryBuyNow.toLocaleString("vi-VN")}₫</span>
          )}
        </div>
        <div className="flex justify-between">
          <span>Tổng phí vận chuyển</span>
          <span>{shipFee.toLocaleString("vi-VN")}₫</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-red-600">
          <span className="whitespace-nowrap">Tổng thanh toán</span>
          {totalSummary ? (
            <span>{(totalSummary + shipFee).toLocaleString("vi-VN")}₫</span>
          ) : (
            <span>
              {(totalSummaryBuyNow + shipFee).toLocaleString("vi-VN")}₫
            </span>
          )}
        </div>
      </div>
      <div className="flex w-full items-end justify-between">
        <p className="mb-3 text-sm text-gray-700">
          Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo&nbsp;
          <a
            href="https://help.shopee.vn/portal/4/article/77242"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4080ee]"
          >
            Điều khoản Shopee
          </a>
        </p>
        {totalSummary ? (
          <button
            className="ml-auto w-full max-w-sm rounded-lg bg-primaryColor py-3 font-semibold text-white"
            onClick={handleOrder}
          >
            Đặt hàng
          </button>
        ) : (
          <button
            className="ml-auto w-full max-w-sm rounded-lg bg-primaryColor py-3 font-semibold text-white"
            onClick={handleOrderNow}
          >
            Đặt hàng
          </button>
        )}
      </div>
    </div>
  );
}
