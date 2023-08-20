import React from 'react'
import footerLogo from '../../assets/felicitylogo.jpeg'
import './footer.css'
import { BsYoutube, BsLinkedin} from  'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
 <footer>
    <a href="" className='footer__logo'>
    <img src={footerLogo} className="logo_img"/>

    </a>

    <ul className='permalinks'>
        <li><Link to="/privacy">Privacy Policy</Link> </li>
        <li><a href="#contact">Contact Us</a></li>
     
    </ul>

    <div className="footer__socials">
        <a href="https://www.linkedin.com/company/felicity-games/"><BsLinkedin/></a>
        <a href="https://www.youtube.com/@FelicityGames"><BsYoutube/></a>
       
    </div>

    <div className="footer__copy">
        <small>contact@felicitygames.com</small> <br/>
        <small>Copyright &copy; 2023 Felicity Games - All Rights Reserved.</small>
    </div>
 </footer>
  )
}

export default Footer