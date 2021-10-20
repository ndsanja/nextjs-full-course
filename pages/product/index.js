import Link from "next/link";
export default function index({ productId = 100 }) {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href={`/product/${productId}`}>
        <a>
          <h2>Product 1</h2>
        </a>
      </Link>
      <Link href={`/product/2`} replace>
        <a>
          <h2>Product 2</h2>
        </a>
      </Link>
      <Link href={`/product/3`}>
        <a>
          <h2>Product 3</h2>
        </a>
      </Link>
    </>
  );
}
