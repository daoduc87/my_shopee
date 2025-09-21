import { useState } from "react";
import {
  useDeletePurchasesMutation,
  useReadPurchasesQuery,
} from "../services/rootApi";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../redux/slices/SnackbarSlice";
import { closeDialog, openDialog } from "../redux/slices/DialogSlice";
import DeleteProductModal from "../components/modal/DeleteProductModal";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import CartItem from "../components/cart/CartItem";
import { useAppSelector } from "../redux/store";
import { useNavigate } from "react-router";
import { saveBuyProducts } from "../redux/slices/BuyProductsSlice";
import { Helmet } from "react-helmet";

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
interface productCheckedItemType {
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

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { open, title } = useAppSelector((state) => state.dialog);
  const { data, refetch } = useReadPurchasesQuery({ status: -1 });
  console.log({ data });
  const [deletePurchase] = useDeletePurchasesMutation();
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const counts = useAppSelector((state) => state.cartCount.counts);
  const totalPrice = data?.data
    .filter((item: RootObject) => checkedIds.includes(item?._id))
    .reduce((acc: number, item: RootObject) => {
      const countProduct = counts[item.product._id] || item.buy_count;
      return acc + item.product.price * countProduct;
    }, 0);
  const totalPriceDiscount = data?.data
    .filter((item: RootObject) => checkedIds.includes(item?._id))
    .reduce((acc: number, item: RootObject) => {
      const countProduct = counts[item.product._id] || item.buy_count;
      return (
        acc +
        (item.product.price_before_discount - item.product.price) * countProduct
      );
    }, 0);
  const productChecked = data?.data.filter((item: RootObject) =>
    checkedIds.includes(item._id),
  );
  const handleBuyProducts = async () => {
    dispatch(saveBuyProducts(productChecked));
    navigate("/checkout");
    refetch();
  };
  console.log({ productChecked });
  const handleClick = () => {
    if (checkedIds.length === 0) {
      dispatch(
        openSnackbar({ type: "error", message: "Vui lòng chọn sản phẩm" }),
      );
      return;
    }
    dispatch(
      openDialog({
        button1: "Trở lại",
        button2: "Có",
      }),
    );
  };
  const handleClose = () => {
    dispatch(closeDialog());
  };
  return (
    <>
      <Helmet>
        <title>Giỏ Hàng Của Tôi</title>
        <meta
          name="description"
          content="Đây là giỏ hàng cái mà bạn đang quan tâm đến sản phẩm đó"
        />
      </Helmet>
      <div className="mx-auto mt-[30px] grid max-w-screen-xl grid-cols-12 gap-9 rounded bg-white p-10">
        <div className="col-span-5">
          <div className="flex gap-3">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-primaryColor"
              checked={data?.data.every((item: RootObject) =>
                checkedIds.includes(item._id),
              )}
              onChange={() => {
                const isAllChecked = data?.data.every((item: RootObject) =>
                  checkedIds.includes(item._id),
                );
                if (isAllChecked) {
                  setCheckedIds([]);
                } else {
                  setCheckedIds(data?.data.map((item: RootObject) => item._id));
                }
              }}
            />
            <h2 className="text-base font-medium">Sản phẩm</h2>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-base font-medium">Đơn giá</h2>
        </div>
        <div className="col-span-2">
          <h2 className="text-base font-medium">Số lượng</h2>
        </div>
        <div className="col-span-2">
          <h2 className="text-base font-medium">Số tiền </h2>
        </div>
        <div className="col-span-1">
          <h2 className="text-base font-medium">Thao tác</h2>
        </div>
      </div>
      {data?.data.map((value: RootObject) => (
        <CartItem
          key={value._id}
          value={value}
          checked={checkedIds.includes(value._id)}
          onCheck={() => {
            setCheckedIds((prev) =>
              prev.includes(value._id)
                ? prev.filter((id) => id !== value._id)
                : [...prev, value._id],
            );
          }}
          refetch={refetch}
        />
      ))}
      <div className="mx-auto mt-[30px] flex max-w-screen-xl items-center justify-between rounded bg-white p-10 text-sm">
        <div className="flex gap-3">
          <input
            type="checkbox"
            name=""
            id=""
            className="accent-primaryColor"
            checked={data?.data.every((item: RootObject) =>
              checkedIds.includes(item._id),
            )}
            onChange={() => {
              const isAllChecked = data?.data?.every((item: RootObject) =>
                checkedIds.includes(item._id),
              );

              if (isAllChecked) {
                setCheckedIds([]);
              } else {
                setCheckedIds(data?.data.map((item: RootObject) => item._id));
              }
            }}
          />
          <span>Chọn tất cả ({data?.data.length})</span>
          <span onClick={handleClick} className="cursor-pointer">
            Xóa
          </span>
        </div>
        <div className="flex gap-3">
          <div>
            <p className="text-base">
              Tổng cộng ({checkedIds.length} Sản phẩm):
              <span className="text-primaryColor">
                ₫{totalPrice?.toLocaleString("vi-VN")}
              </span>
            </p>
            <p className="float-right mt-1">
              Tiết kiệm
              <span className="ml-4 text-primaryColor">
                ₫{totalPriceDiscount?.toLocaleString("vi-VN")}
              </span>
            </p>
          </div>

          <button
            className={`h-[2.5rem] w-[13.125rem] rounded bg-[#f05d40] text-[0.875rem] font-light text-white hover:bg-red-600 ${checkedIds.length === 0 ? "pointer-events-none opacity-80" : ""}`}
            onClick={handleBuyProducts}
          >
            Mua Hàng
          </button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DeleteProductModal />
        </DialogContent>
        <DialogActions className="mr-10 flex gap-3">
          <button className="h-[2.5rem] w-[6.5625rem] rounded-sm bg-primaryColor text-[0.875rem] uppercase text-white shadow-shadowButton">
            Trở Lại
          </button>
          <button
            className="p-3 uppercase"
            onClick={async () => {
              await deletePurchase(
                productChecked.map((item: productCheckedItemType) => item._id),
              );
              refetch();
              handleClose();
            }}
          >
            Có
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
