import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import styles from '../../styles/Home.module.css'
import { fromImageToUrl, API_URL } from '../../utils/urls'

export default function Product({products}) {

    return(
        <div>
          <img src='/Supplier-BG.jpg'></img>
          <h4 className={styles.homeTitle}>PRODUCTS</h4>

{products.data && products.data.map((product) => (
  <div key={product.attributes.id} className={styles.supplier}>
    <Link className={styles.homeLink} href={`/products/${product.attributes.slug}`}>
      {/* <a> */}
        <div className={styles.supplier__Rows}>
          <div className={styles.supplier__ColImg}>
            <img src={fromImageToUrl(product.attributes.image.data[0])} />
          </div>
          <div className={styles.supplier__Col}>
            <h5> {product.attributes.name}</h5>
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
    const product_res = await axios.get(`${API_URL}/api/products?populate=*`)
    const products = await product_res.data
    //Return the suppliers as props
    return {
      props: {
        products
      }
    }
  }