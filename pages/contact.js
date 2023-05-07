import React from "react";
import styles from '../styles/Contact.module.css'
const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.bodyContact}>
            <form onSubmit={handleSubmit}>
                <div className={styles.name_contact}>
                    <div>
                <h6>First Name</h6>
                <input placeholder="Enter First Name" />
                </div>
                <div className={styles.lstName_contact}>
                <h6>Last Name</h6>
                <input placeholder="Enter Last Name"></input>
                </div>
                </div>
                <h6>Company Name</h6>
                <input className={styles.inp_contact} placeholder="Enter Company Name" />

                <h6>Business Email</h6>
                <input className={styles.inp_contact} placeholder="Enter Business Email" />

                <h6 for="phone">Phone Number:</h6>
                <select id="country-code" name="country-code">
                    <option value="1">+1</option>
                    <option value="86">+86</option>
                    <option value="44">+44</option>
                </select>
                <input type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                <h6>Which countries are you interested in?</h6>
                <input className={styles.inp_contact} />
                <h6>Which products are you interested in?</h6>
                <input className={styles.inp_contact}/>
                <h6>Write down your messenges</h6>
                <textarea className={styles.txta_contact} placeholder="Enter Messages" />

                <button className={styles.btn_contact} type="submit">Send</button>
            </form>
        </div>
    )
}
export default Contact