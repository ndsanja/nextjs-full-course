import Head from "next/head";
import Hello from "../components/Hello";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  //progamaticly navigate using useRouter
  const handleClick = () => {
    console.log("Placing your order succesfully");
    router.push("/product");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Nila Dwi Sanja</title>
        <meta name="description" content="Next JS Full Course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Homepage</h1>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/product">
          <a>Product</a>
        </Link>
        <Hello />

        <button onClick={handleClick}>Place Order</button>
      </main>
    </div>
  );
}
