import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title="home">
    <h1>hi</h1>
    <p>
      <Link href='/about'>
        <a>ayyy</a>
      </Link>
    </p>
  </Layout>
)