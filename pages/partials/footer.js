import React from "react"
import styles from '../../styles/Home.module.css'
import Link from "next/link"

import { BsTelephone, BsChatSquareDots, BsHouseDoor } from "react-icons/bs"

const Footer = () => {

    return (
        <div className={styles.footer}>
            
                <div class="p-4">
                    <div class="sm:flex   ">
                        <div className={styles.footer_1}>
                            <h5>Introduction</h5>
                            <h6>Farmgate Joint Stock Company</h6>
                            <p>FARMGATE We specialize in providing products that meet food safety and quality standards</p>
                        </div>
                        <div className={styles.footer_2}>
                            <div>
                                <h5>Contact</h5>
                                <p className="footer_inline"><BsTelephone className="footer_icon"/> 0868.246.400</p>
                                <p className="footer_inline"> <BsChatSquareDots className="footer_icon"/>farmgate@techcoop.vn</p>
                                <p className="footer_inline"><BsHouseDoor className="footer_icon" /> No. 01, Street 24B, An Phu Ward, Thu Duc City</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_p">
                        <span className="supLink text-sm text-gray-950 sm:text-center dark:text-gray-400">Copyright © 2023  <Link className={styles.supLink} href="https://farmgateshop.vn/" >FARMGATE</Link>
                        </span>
                    </div>
                </div>
        </div>

    )
}
export default Footer
