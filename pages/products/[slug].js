import Head from 'next/head'
import styles from "../../styles/ProductV.module.css"
// import suppliers from '../../suppliers.json'
import { fromImageToUrl, API_URL } from '../../utils/urls'

//  const supplier = suppliers.data[0]

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
            <section>
                <div className={styles.container_slug}>
                    <div className={styles.flex}>
                        <div className={styles.left}>
                            <img className={styles.main_image} src={fromImageToUrl(product.attributes.image.data[0])} />
                            {/* <div className={styles.option}>
                                <div className={styles.flex}>
                                <img className={styles.img_slug} src="image/p1.jpg" onclick="img('image/p1.jpg')" />
                                <img className={styles.img_slug} src="image/p2.jpg" onclick="img('image/p2.jpg')" />
                                <img className={styles.img_slug} src="image/p6.jpg" onclick="img('image/p6.jpg')" />
                                </div>
                            </div> */}
                        </div>
                        <div className={styles.right}>
                        <h3>{product.attributes.name}</h3>
                            <p>    {product.attributes.content}</p>
                        </div>
                    </div>
                    </div>
            </section>

            </div>
            
    )
}

export async function getStaticProps({ params: { slug } }) {
    const product_res = await fetch(`${API_URL}/api/products?populate=*&filters[slug][$eq]=${slug}`)
    const found = await product_res.json()

    return {
        props: {
            product: found.data[0]
        }
    }
}

export async function getStaticPaths() {
    //Retrieve all the possible paths
    const product_res = await fetch(`${API_URL}/api/products?populate=*`)
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
