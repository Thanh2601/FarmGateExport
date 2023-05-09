import React from "react"
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
    return(
        <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
     {/*  <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
  </div>
</nav>
</div>

)
}
export default Header