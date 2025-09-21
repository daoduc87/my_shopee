import ProductSummary from "../components/productdetail/ProductSummary";
import ProductDescription from "../components/productdetail/ProductDescription";
import ProductRelated from "../components/productdetail/ProductRelated";
import { useGetProductDetailQuery } from "../services/rootApi";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { convert } from "html-to-text";

export default function ProductDetail() {
  const { id } = useParams();
  const { data } = useGetProductDetailQuery({ productId: id });
  const categoryId = data?.data.category._id;
  console.log({ data });
  return (
    <>
      <Helmet>
        <title>{data.data.name}</title>
        <meta
          name="description"
          content={convert(data.data.description, {
            wordwrap: 130,
            limits: {
              maxInputLength: 300,
            },
          })}
        />
      </Helmet>
      <ProductSummary />
      <ProductDescription />
      <ProductRelated categoryId={categoryId} />
    </>
  );
}
