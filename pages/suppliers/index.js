import React from 'react';
import styles from "../../styles/Supplier.module.css"
import Card from "../../components/supplier/SupplierCard.js";
import Head from 'next/head'
import Link from 'next/link'
import { fromImageToUrl, API_URL } from '../../utils/urls'

function Supplier( {suppliers} ) {
  return (
    <div className={styles.container}>
    {suppliers.data && suppliers.data.map((supplier) => (
        <div key={supplier.attributes.name} className={styles.supplier}>
          <Link href={`/suppliers/${supplier.attributes.slug}`}>
            {/* <a> */}
                <div className={styles.row}>
                    <Card
                    name={supplier.attributes.name}
                    bg_img={fromImageToUrl(supplier.attributes.image.data[0])}
                    content={supplier.attributes.content}
                    />
                </div>
            {/* </a> */}
          </Link>  
        </div>
      ))}
  </div>
  )
}

export default Supplier;


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