const benefitItems = [
  {
    img: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi",
    title: "Deal Từ 1.000Đ",
  },
  {
    img: "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi",
    title: "Mã Giảm Giá",
  },
  {
    img: "	https://cf.shopee.vn/file/vn-11134258-820l4-mee7fnojx1c175_xhdpi",
    title: "Shopee Xử Lý",
  },
  {
    img: "https://cf.shopee.vn/file/vn-11134258-7ras8-mb6e1ufaxoldb9_xhdpi",
    title: "Deal Hot Giờ Vàng",
  },
  {
    img: "	https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi",
    title: "Shopee Style Voucher 30%",
  },
  {
    img: "https://cf.shopee.vn/file/1d25d74d6900b85cfde8f967e613041d_xhdpi",
    title: "Săn Ngay 100.000 Xu",
  },
  {
    img: "	https://cf.shopee.vn/file/vn-50009109-f692e9b0be05d1a11cded7f9f72b5f0b_xhdpi",
    title: "Khách Hàng Thân Thiết",
  },
];

export default function BenefitList() {
  return (
    <div className="bg-white py-5">
      <div className="mx-auto flex max-w-screen-xl flex-wrap justify-around gap-4">
        {benefitItems.map((item, index) => (
          <a href="#!" key={index}>
            <div className="flex w-[100px] flex-col items-center text-center">
              <img
                src={item.img}
                alt={item.title}
                className="mb-2 h-[45px] w-[45px]"
              />
              <span className="text-sm">{item.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
