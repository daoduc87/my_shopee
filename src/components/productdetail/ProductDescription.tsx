import { useParams } from "react-router";
import { useGetProductDetailQuery } from "../../services/rootApi";
export default function ProductDescription() {
  const { id } = useParams();
  const { data } = useGetProductDetailQuery({ productId: id });
  return (
    <div className="mx-auto mt-6 max-w-screen-xl rounded bg-white p-6 shadow">
      <h2 className="mb-4 bg-gray-50 px-4 py-3 text-lg font-semibold text-gray-800">
        MÔ TẢ SẢN PHẨM
      </h2>
      <div
        className="leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{ __html: data?.data.description }}
      />
    </div>
  );
}
