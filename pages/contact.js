import React from "react";
import styles from '../styles/Contact.module.css'
import { API_URL } from '../utils/urls'
// import sup from '../pages/suppliers/[slug].js'
import { useRouter } from 'next/router'
import Popup from 'reactjs-popup'


const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        data: {
            to: document.getElementById('to').value,
            name: document.getElementById('name').value,
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
                return (
                    <Popup>
                        <button>Confirm</button>
                    </Popup>
                )})
            .then(res => (window.location.reload()))
            .catch(error => console.error('Error:', error.response.data)); 

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
                    <div>
                    <h6>Full Name</h6>
                    <input className={styles.inp_contact} id="name" placeholder="Enter Your Name" />
                    </div>
                    <h6>Email</h6>
                    <input id="email" className={styles.inp_contact} placeholder="Email"/>
                    <h6 for="phone">Phone Number:</h6>
                    <input type="tel" className={styles.inp_contact} id="phone" name="phone" placeholder="0123456789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                    <h6>Write down your messenges</h6>
                    <textarea id="mess" className={styles.txta_contact} placeholder="Enter Messages" />
                    <Popup trigger={<button className={styles.btn_contact} type="submit" onClick={handleSubmit}>Send</button>} position="right center">
                        <div>Sent!!!</div>
                        <button>Confirm</button>
                    </Popup>
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
                    <div>
                    <h6>Full Name</h6>
                    <input className={styles.inp_contact} id="name" placeholder="Enter Your Name" />
                    </div>
                    <h6>Email</h6>
                    <input id="email" className={styles.inp_contact} placeholder="Email"/>
                    <h6 for="phone">Phone Number:</h6>
                    <input type="tel" className={styles.inp_contact} id="phone" name="phone" placeholder="0123456789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                    <h6>Write down your messenges</h6>
                    <textarea id="mess" className={styles.txta_contact} placeholder="Enter Messages" />
    
                    <button className={styles.btn_contact} type="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>
        )
    }

    
}
export default Contact