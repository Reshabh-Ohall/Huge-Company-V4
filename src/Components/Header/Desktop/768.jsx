import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
// import './style.css'

export default function Header768() {
  return (
    <header className="hdr-768 center">
      <div className="w-80"></div>

      <ul className="hdr-icons-768 center w-20">
        <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="SMI-768" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="SMI-768" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="SMI-768" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className="SMI-768" /></a></li>
      </ul>
    </header>
  )
}
