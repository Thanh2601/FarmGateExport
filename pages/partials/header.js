import React from "react"
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
  return(
      <div>
{/*    <nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/"><img src='/Farmgate.png' /></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto" className={styles.header_ul_nav}>
   
  <li className={styles.header_li_nav} class="nav-item">
      <Link class="nav-link" href="/">Home</Link>
    </li>
    <li className={styles.header_li_nav} class="nav-item">
      <Link class="nav-link" href="/suppliers">Suppliers</Link>
    </li>
    <li className={styles.header_li_nav} class="nav-item">
      <Link class="nav-link" href="/products">Products</Link>
    </li>
    <li className={styles.header_li_nav} class="nav-item active" >
      <Link class="nav-link" href="/about">About Us</Link>
    </li>
    <li className={styles.header_li_nav} class="nav-item">
      <Link class="nav-link" href="/contact">Contact</Link>
    </li>
  </ul>
</div>
</nav> */}

<nav className={styles.header_nav} class="flex items-center justify-between flex-wrap bg-gray-50 p-6">
<div class="flex items-center flex-shrink-0 text-white mr-6">
<a class="navbar-brand" href="/"><img src='/Farmgate.png' /></a>
</div>
<div class="block lg:hidden">
  <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  </button>
</div>

<ul className="header_ul_nav w-full block flex-grow lg:flex lg:items-center lg:w-auto">
<li className="header_li_nav block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      <Link className="supLink" href="/">
        Home
      </Link>
      </li>
      <li href="#responsive-header" className="header_li_nav block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      <Link className="supLink" href="./suppliers">
        Supplier
      </Link>
      </li>
      <li href="#responsive-header" className="header_li_nav block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
      <Link className="supLink" href="/products">
        Product
      </Link>
      </li>
      <li href="#responsive-header" className="header_li_nav block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
      <Link className="supLink" href="/about">
        About Us
      </Link>
      </li> 
      <li href="#responsive-header" className="header_li_nav block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
      <Link className="supLink" href="/contact">
        Contact
      </Link>
      </li>
      </ul>

</nav>
</div>

)
}
export default Header
