import Head from 'next/head'
import styles from "../../styles/ProductV.module.css"
// import suppliers from '../../suppliers.json'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import Link from 'next/link'
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Product = ({ product }) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
                {product.attributes.meta_title &&
                    <title>{product.attributes.meta_title}</title>
                }
                {product.attributes.meta_description &&
                    <meta name="description" content={product.attributes.meta_description}></meta>
                }
            </Head>
            <h4 className={styles.pro_detail}>Product Detail</h4>
            <section>
                <div className={styles.container_slug}>
                    <div className={styles.flex}>
                        <div className={styles.left}>
                            <img className={styles.main_image} src={fromImageToUrl(product.attributes.image.data[0])} />
                        </div>
                        <div className={styles.right}>
                            <h3>{product.attributes.name}</h3>
                            {/* ReactMarkdown để format HMTL , rehypeRaw hỗ trợ ReactMarkdown */}
                            <p><ReactMarkdown children={product.attributes.content} rehypePlugins={[rehypeRaw]} /></p>
                        </div>
                    </div>
                    </div>
            </section>
            <div >

                <h4 className={styles.sup_name}>Supplier</h4>
                <div className={styles.row}>
                    <Link className={styles.sup_link} href={`/suppliers/${product.attributes.supplier.data.attributes.slug}`} >
                        <div>
                            <img className={styles.sup_img} src={fromImageToUrl(product.attributes.supplier.data.attributes.image.data[0])} />
                            <h4 className={styles.sup_name}>{product.attributes.supplier.data.attributes.name}</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export async function getStaticProps({ params: { slug } }) {
    const product_res = await fetch(`${API_URL}/api/products?populate[0]=image&populate[1]=supplier.image&filters[slug][$eq]=${slug}`)
    const found = await product_res.json()
    console.log('found', found)
    return {
        props: {
            product: found.data[0]
        }
    }
}

export async function getStaticPaths() {
    //Retrieve all the possible paths
    const product_res = await fetch(`${API_URL}/api/products?populate[0]=image&populate[1]=supplier.image`)
    const products = await product_res.json()
    //Return them to NextJS context
    return {
        paths: products.data.map(product => ({
            params: { slug: String(product.attributes.slug) }
        })),
        fallback: false //Tells to the next js to show 404 if the param is not map
    }
}

export default Product
