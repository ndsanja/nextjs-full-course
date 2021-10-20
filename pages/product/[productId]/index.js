import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;

  return <div>this is product detail {productId}</div>;
}
