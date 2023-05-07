import Head from 'next/head'
import styles from "../../styles/Supplier.module.css"
// import suppliers from '../../suppliers.json'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import Header from '../partials/header'
import Footer from '../partials/footer'
//  const supplier = suppliers.data[0]

const Supplier = ({ supplier }) => {
    return (
        <div>
            <Head>
                {supplier.attributes.meta_title &&
                    <title>{supplier.attributes.meta_title}</title>
                }

                {supplier.attributes.meta_description &&
                    <meta name="description" content={supplier.attributes.meta_description}></meta>
                }
            </Head>
            <Header />
            <div>
            <img className={styles.img_sup} src={fromImageToUrl(supplier.attributes.image.data[0])} />
            <h3>{supplier.attributes.name}</h3>
            </div>
            <div>
                <p>
                    {supplier.attributes.content}
                </p>
            </div>

            <Footer />
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const supplier_res = await fetch(`${API_URL}/api/suppliers?populate=*&filters[slug][$eq]=${slug}`)
    const found = await supplier_res.json()

    return {
        props: {
            supplier: found.data[0]
        }
    }
}

export async function getStaticPaths() {
    //Retrieve all the possible paths
    const supplier_res = await fetch(`${API_URL}/api/suppliers?populate=*`)
    const suppliers = await supplier_res.json()
    //Return them to NextJS context
    return {
        paths: suppliers.data.map(supplier => ({
            params: { slug: String(supplier.attributes.slug) }
        })),
        fallback: false //Tells to the next js to show 404 if the param is not map
    }
}

export default Supplier