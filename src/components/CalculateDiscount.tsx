interface IPropCalculateDiscount {
  oldPrice: number;
  price: number;
}
export default function CalculateDiscount({
  oldPrice,
  price,
}: IPropCalculateDiscount) {
  const percentDiscount = (((oldPrice - price) * 100) / oldPrice).toFixed();
  return (
    <>
      <span className="inline-block min-w-[40px] rounded bg-red-100 px-2 py-0.5 text-center text-sm font-semibold text-red-500">
        {percentDiscount} %
      </span>
    </>
  );
}
