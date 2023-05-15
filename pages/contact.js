import React from "react";
import styles from '../styles/Contact.module.css'
import { API_URL } from '../utils/urls'
// import sup from '../pages/suppliers/[slug].js'
import { useRouter } from 'next/router'


const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        data: {
            to: document.getElementById('to').value,
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            email: document.getElementById('email').value,
            tel: document.getElementById('phone').value,
            mess: document.getElementById('mess').value
        }
    }
    fetch(`${API_URL}/api/contacts`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then(function(response){ 
                return alert("Sent!!!")})
            .then(res => (window.location.reload()))
            .catch(error => console.error('Error:', error)); 

}




const Contact = () => {
    const router = useRouter();

    const {
        query: { to },
      } = router



    if (to === undefined) {
        return (
            <div className={styles.bodyContact}>
                <form>
                    <div id="to" value=""></div>
                    {/* <input id="to" className={styles.inp_contact} value="Adminstrator" type="hidden"></input> */}
                    <div className={styles.name_contact}>
                        <div>
                    <h6>First Name</h6>
                    <input id="firstname" placeholder="Enter First Name" />
                    </div>
                    <div className={styles.lstName_contact}>
                    <h6>Last Name</h6>
                    <input id="lastname" placeholder="Enter Last Name"></input>
                    </div>
                    </div>
                    <h6>Email</h6>
                    <input id="email" className={styles.inp_contact} placeholder="Email"/>
                    <h6 for="phone">Phone Number:</h6>
                    <select id="country-code" name="country-code">
                        <option value="1">+84</option>
                        <option value="86">+86</option>
                        <option value="44">+44</option>
                    </select>
                    <input type="tel" id="phone" name="phone" placeholder="0123456789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                    <h6>Write down your messenges</h6>
                    <textarea id="mess" className={styles.txta_contact} placeholder="Enter Messages" />
    
                    <button className={styles.btn_contact} type="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        )
    }
    else {
        return (
            <div className={styles.bodyContact}>
                <form>
                    <h6>To</h6>
                    <input id="to" className={styles.inp_contact} placeholder={to} value={to} disabled></input>
                    <div className={styles.name_contact}>
                        <div>
                    <h6>First Name</h6>
                    <input id="firstname" placeholder="Enter First Name" />
                    </div>
                    <div className={styles.lstName_contact}>
                    <h6>Last Name</h6>
                    <input id="lastname" placeholder="Enter Last Name"></input>
                    </div>
                    </div>
                    <h6>Email</h6>
                    <input id="email" className={styles.inp_contact} placeholder="Email"/>
                    <h6 for="phone">Phone Number:</h6>
                    <select id="country-code" name="country-code">
                        <option value="1">+84</option>
                        <option value="86">+86</option>
                        <option value="44">+44</option>
                    </select>
                    <input type="tel" id="phone" name="phone" placeholder="0123456789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                    <h6>Write down your messenges</h6>
                    <textarea id="mess" className={styles.txta_contact} placeholder="Enter Messages" />
    
                    <button className={styles.btn_contact} type="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        )
    }

    
}
export default Contact