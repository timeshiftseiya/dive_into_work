import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout title="about page">
    <p>this is about page</p>
    <p><Link href="/"><a>home</a></Link></p>
  </Layout>
)