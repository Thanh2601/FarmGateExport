import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
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
    <img className={styles.imgBG} src='/backgroundFarmgate.png'></img>
    <h3 className={styles.homeTitle}>SUPPLIER</h3>

    {suppliers.data && suppliers.data.map((supplier) => (
      <div key={supplier.attributes.id} className={styles.supplier}>
        <Link className={styles.homeLink} href={`/suppliers/${supplier.attributes.slug}`}>
          {/* <a> */}
            <div className={styles.supplier__Rows}>
              <div className={styles.supplier__ColImg}>
                <img src={fromImageToUrl(supplier.attributes.image.data)} />
              </div>
              <div className={styles.supplier__Col}>
                <h5> {supplier.attributes.name}</h5>
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
  const supplier_res = await axios.get(`${API_URL}/api/suppliers?populate=*`)
  const suppliers = await supplier_res.data
  //Return the suppliers as props
  return {
    props: {
      suppliers
    }
  }
}
