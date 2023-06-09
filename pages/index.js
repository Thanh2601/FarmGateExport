import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import SCard from '../components/supplier/SupplierCard.js'
import PCard from '../components/product/ProductCard.js'

// import suppliers from '../suppliers.json'
import { fromImageToUrl, API_URL } from '../utils/urls'

export default function Home( {suppliers, products} ) {
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
    <h3 className={styles.homeTitle}>SUPPLIERS</h3>

    <div className={styles.container}>
      {suppliers.data && suppliers.data.map((supplier) => (
          <div key={supplier.attributes.id} className={styles.supplier}>
            <Link href={`/suppliers/${supplier.attributes.slug}`} className={styles.supLink}>
              {/* <a> */}
                  <div className={styles.row}>
                      <SCard
                      name={supplier.attributes.name}
                      bg_img={fromImageToUrl(supplier.attributes.image.data[0])}
                      content={supplier.attributes.meta_description}
                      />
                  </div>
              {/* </a> */}
            </Link>  
          </div>
        ))}
    </div>
    <a href="/suppliers"><button className={styles.btn} >
    More
    </button></a>
    <br/>

      <h3 className={styles.homeTitle}>PRODUCTS</h3>
    <div className={styles.container}>
      {products.data && products.data.map((product) => (
      <div key={product.attributes.id}>
        <Link className={styles.homeLink} href={`/products/${product.attributes.slug}`}>
          {/* <a> */}
          <div className={styles.row}>
              <PCard
              name={product.attributes.name}
              bg_img={fromImageToUrl(product.attributes.image.data[0])}
              content={product.attributes.meta_description}
              />
          </div>
          {/* </a> */}
        </Link>  
      </div>
    ))}
    </div>
    <br/>
    <a href="/products"><button className={styles.btn} >
    More
    </button></a>
    <br/>

    </div>
    
  )
}

export async function getStaticProps() {
  //Fetch the suppliers
  const supplier_res = await axios.get(`${API_URL}/api/suppliers?populate=*&filters[promote][$gt]=0&sort=promote:asc`)
  const suppliers = await supplier_res.data
  const product_res = await axios.get(`${API_URL}/api/products?populate=*&filters[promote][$gt]=0&sort=promote:asc`)
  const products = await product_res.data
  //Return the suppliers as props
  return {
    props: {
      suppliers,
      products
    }
  }
}

