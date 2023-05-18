import Head from 'next/head'
import styles from "../../styles/Supplier.module.css"
// import suppliers from '../../suppliers.json'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import Header from '../partials/header'
import Footer from '../partials/footer'
import Card from "../../components/product/ProductCard.js"
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";


const Supplier = ({ supplier }) => {

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        // var globalSup = supplier.attributes.name
        // // window.globalSup = globalSup
        // console.log(globalSup)
        // console.log(supName)
        router.push({
            pathname: '/contact',
            query: {to: supplier.attributes.name} 
        })
        Supplier.getInitialProps = ({query: {to}}) => {
            return to
        }
        
    }



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
            <div>
            <img className={styles.supImg} src={fromImageToUrl(supplier.attributes.image.data[0])} />
            <h3 className={styles.supName}>{supplier.attributes.name}</h3>
            <div className={styles.attri}>
                <div className={styles.t_block}>
                    <h3 className={styles.title}>Farm location: </h3>
                    <p className={styles.t_content}>{supplier.attributes.farmlocation}</p>
                </div>
                <h3 className={styles.title}>Production capacity: </h3>
                <p>{supplier.attributes.production_cap}</p>
                <h3 className={styles.title}>Certificates: </h3>
                <div>
                    {supplier.attributes.certificates.data && supplier.attributes.certificates.data.map((cer) => (
                                <div key={cer.id} className={styles.cb_container}>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id="checkbox" checked/>
                                        <label for="checkbox"><span>{cer.attributes.name}</span></label>
                                    </div>
                                </div>
                            ))}
                </div>
                </div>
                <div className={styles.childattri}>
                    <h3 className={styles.title}>Availability Season</h3>
                    <div className={styles.chart}>
                        {supplier.attributes.seasons.data && supplier.attributes.seasons.data.map((month) => (
                                    <div key={month.id} className={styles.seasonchart}>
                                        <li className={styles.season}>{month.attributes.name}</li>
                                    </div>
                                ))}
                    </div>
                    <h3 className={styles.title}>Services: </h3>
                    <p>{supplier.attributes.services}</p>
                    <h3 className={styles.title}>Ready for markets: </h3>
                    <p>{supplier.attributes.markets}</p>
                </div>
                
            </div>
            <div className={styles.supContent}>
            <ReactMarkdown children={supplier.attributes.content}/>
                {/* <p>
                    
                    {supplier.attributes.content}
                </p> */}
            </div>
            <div className={styles.container}>
                {supplier.attributes.products.data && supplier.attributes.products.data.map((product) => (
                        <div key={product.id} className={styles.container}>
                            <Link href={`/products/${product.attributes.slug}`} className={styles.supLink}>
                                <div className={styles.row}>
                                    <Card
                                    name={product.attributes.name}
                                    bg_img={fromImageToUrl(product.attributes.image.data[0])}
                                    content=""
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
            <button className={styles.contact_btn} id="contact" onClick={handleClick}> Contact </button>
        </div>
    )
}




export async function getStaticProps({ params: { slug } }) {
    const supplier_res = await fetch(`${API_URL}/api/suppliers?populate[certificates][populate]=*&populate[seasons][populate]=*&populate[image][populate]=*&populate[products][populate]=*&filters[slug][$eq]=${slug}`)
    const found = await supplier_res.json()

    return {
        props: {
            supplier: found.data[0]
        }
    }
}

export async function getStaticPaths() {
    //Retrieve all the possible paths
    const supplier_res = await fetch(`${API_URL}/api/suppliers?populate[0]=image&populate[1]=products.image`)
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