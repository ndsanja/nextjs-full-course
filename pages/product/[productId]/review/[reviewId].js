import { useRouter } from "next/router";

export default function ReviewId() {
  const router = useRouter();
  const { reviewId, productId } = router.query;

  return (
    <>
      <h2>
        this is review {reviewId} for product id {productId}
      </h2>
    </>
  );
}
