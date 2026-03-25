import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
// import './style.css'

export default function Header1024() {
  return (
    <header className="hdr-1024 center">
      <div className="w-80"></div>

      <ul className="hdr-icons-1024 w-20 center">
        <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="SMI-1024" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="SMI-1024" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="SMI-1024" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className="SMI-1024" /></a></li>
      </ul>
    </header>
  )
}
