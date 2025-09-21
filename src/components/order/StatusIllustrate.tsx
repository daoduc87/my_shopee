interface IPropStatusIllustrateType {
  status: number;
}
export default function StatusIllustrate({
  status,
}: IPropStatusIllustrateType) {
  return (
    <>
      {status === 1 && <p className="uppercase">Chờ Xác Nhận</p>}
      {status === -1 && <p className="uppercase">chưa đặt hàng</p>}
    </>
  );
}
