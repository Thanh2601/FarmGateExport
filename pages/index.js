import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import suppliers from '../suppliers.json'
import { fromImageToUrl, API_URL } from '../utils/urls'

export default function Home( {suppliers} ) {
  // const supplier_res = await fetch(`${API_URL}/api/suppliers?populate=*`)
  // const suppliers = await supplier_res.json()

  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    {suppliers.data && suppliers.data.map((supplier) => (
      <div key={supplier.attributes.id} className={styles.supplier}>
        <Link href={`/suppliers/${supplier.attributes.slug}`}>
          {/* <a> */}
            <div className={styles.supplier__Rows}>
              <div className={styles.supplier__ColImg}>
                <img src={fromImageToUrl(supplier.attributes.image.data[0])} />
              </div>
              <div className={styles.supplier__Col}>
                {supplier.id} {supplier.attributes.name}
              </div>
            </div>
          {/* </a> */}
        </Link>  
      </div>
    ))}

    </div>
  )
}

export async function getStaticProps() {
  //Fetch the suppliers
  const supplier_res = await fetch(`${API_URL}/api/suppliers?populate=*`)
  const suppliers = await supplier_res.json()
  //Return the suppliers as props
  return {
    props: {
      suppliers
    }
  }
}
