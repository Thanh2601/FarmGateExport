import React from "react"
import styles from '../../styles/Home.module.css'
import { BsTelephone , BsChatSquareDots ,BsHouseDoor } from "react-icons/bs"

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h5>Introduction</h5>
                        <h6>Farmgate Joint Stock Company</h6>
                        <p>FARMGATE We specialize in providing products that meet food safety and quality standards</p>
                    </div>
                    <div class="col-sm" >
                        <h5>Contact</h5>
                        <p><BsTelephone/> 0868.246.400</p>
                        <p><BsChatSquareDots/> farmgate@techcoop.vn</p>
                        <p><BsHouseDoor/> No. 01, Street 24B, An Phu Ward, Thu Duc City</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_p}>
                <p>
                    Copyright © 2023 FARMGATE
                </p>
            </div>

        </div>

    )
}
export default Footer