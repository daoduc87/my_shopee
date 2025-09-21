interface IPropButtonActions {
  status: number;
}
export default function ButtonActions({ status }: IPropButtonActions) {
  return (
    <>
      {status === 1 && (
        <button className="min-w-[150px] rounded-lg border bg-[#e5e4e1] px-4 py-2 text-[#555] opacity-[0.4]">
          Chờ
        </button>
      )}
      {status === -1 && (
        <button className="min-w-[150px] rounded-lg border bg-[#e5e4e1] px-4 py-2 text-[#555]">
          Chưa Đặt Hàng
        </button>
      )}
    </>
  );
}
