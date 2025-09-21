interface IPopsHeaderAuth {
  title: string;
}
export default function HeaderAuth({ title }: IPopsHeaderAuth) {
  return (
    <div className="bg-white py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1280px-Shopee.svg.png"
              alt=""
              className="h-[40px] w-[123px]"
            />
            <p className="mt-3 text-[1.5rem] text-[#222]">{title}</p>
          </div>
          <a
            href="https://help.shopee.vn/portal/4/vn/s"
            target="blank"
            className="text-primaryColor"
          >
            Bạn cần giúp đỡ?
          </a>
        </div>
      </div>
    </div>
  );
}
