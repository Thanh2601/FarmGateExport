import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import styles from '../../styles/Product.module.css'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import PCard from '../../components/product/ProductCard.js'

export default function Product({products}) {

    return(
        <div>
          <img src='/Supplier-BG.jpg'></img>
          <h4 className={styles.homeTitle}>PRODUCTS</h4>

          <div className={styles.container}>
          {products.data && products.data.map((product) => (
            <div key={product.attributes.id} className={styles.supplier}>
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