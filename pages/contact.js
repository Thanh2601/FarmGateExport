import React from "react";
import styles from '../styles/Contact.module.css'
// import '../styles/globals.css'
import { API_URL } from '../utils/urls'
// import sup from '../pages/suppliers/[slug].js'
import { useRouter } from 'next/router'
import Popup from 'reactjs-popup'
import 'flowbite'
// import { Popover } from '@headlessui/react'
import { Modal } from '@headlessui/react'



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

    //   const modalEl = document.getElementById('info-popup');  

    //   const privacyModal = new Modal(modalEl, {
    //           placement: 'center'
    //       });
      
    //       privacyModal.show();
      
    //   const closeModalEl = document.getElementById('close-modal');
    //       closeModalEl.addEventListener('click', function() {
    //           privacyModal.hide();
    //       });
      
    //   const acceptPrivacyEl = document.getElementById('confirm-button');
    //       acceptPrivacyEl.addEventListener('click', function() {
    //           alert('privacy accepted');
    //           privacyModal.hide();
    //   });



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
                    <h6 htmlFor="phone">Phone Number:</h6>
                    <input type="tel" className={styles.inp_contact} id="phone" name="phone" placeholder="0123456789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
                    <h6>Write down your messenges</h6>
                    <textarea id="mess" className={styles.txta_contact} placeholder="Enter Messages" />
                    <Popup trigger={<button className={styles.btn_contact} type="submit" onClick={handleSubmit}>Send</button>} position="right center">
                        <div>Sent!!!</div>
                        <button>Confirm</button>
                    </Popup>
                    <div id="info-popup" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                        <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
                            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
                                <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Privacy info</h3>
                                    <p>
                                        The backup created with this export functionnality may contain some sensitive data. We suggest you to save this archive in a securised location.
                                    </p>
                                </div>
                                <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                                    <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Learn more about privacy</a>
                                    <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                                        <button id="close-modal" type="button"  className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                                        <button id="confirm-button" type="button" className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
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
                    <h6 htmlFor="phone">Phone Number:</h6>
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