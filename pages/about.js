import React from "react";
import styles from "../styles/Home.module.css"

const About = () => {

    return (
        <div className={styles.abt_body}>
            <h5>Introduction</h5>
            <h6>ABOUT FARMGATE:</h6>

            <p>-FarmGate is currently the outlet for fresh and processed local agricultural products.</p>

            <p>-With a network of over 200 cooperatives and 200,000 members throughout Vietnam (2022-2023), the company has direct access to fresh and processed agricultural products from each locality in Vietnam.</p>

            <p>-At FarmGate, we provide solutions for the distribution of agricultural products to consumers both domestically and internationally.</p>

            <img className={styles.img_about} src='./about_FarmGate_1.png'/>

            <h6>ABOUT US:</h6>

            Our team consists of local personnel in cities with years of experience in the agriculture industry. With accumulated knowledge and techniques, we help customers access quality agricultural products. In addition, with our distribution advantage, we also provide advice to farmers on improving their products, including their quality and production capacity over time.

            <h6>OUR VALUES:</h6>

            We aim to build long-term business relationships with partners and customers based on trust, transparency, integrity, and efficiency.

            <h6>ABOUT OUR PRODUCTS:</h6>

            <p>-Our products are diverse in terms of variety and form, imported from farms throughout Vietnam, including fresh fruits, processed fruits (dried...), various nuts, jams, honey, tea, butter...</p>

            <p>-All of these agricultural products have clear origins, either sourced locally or produced locally with locally-harvested raw materials, meeting requirements for food safety and hygiene.</p>



        </div>
    )
}
export default About