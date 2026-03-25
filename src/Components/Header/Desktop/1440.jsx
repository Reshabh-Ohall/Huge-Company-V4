import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
// import './style.css'

export default function Header1440() {
  return (
    <header className="hdr-1440 center">
      <div className="w-80"></div>

      <ul className="hdr-icons-1440 center w-20">
        <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="SMI-1440" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="SMI-1440" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="SMI-1440" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className="SMI-1440" /></a></li>
      </ul>
    </header>
  )
}
