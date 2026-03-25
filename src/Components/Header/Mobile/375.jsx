import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import './mcss.css'

export default function Header375() {
  return (
    <header className="hdr-375 center">
      <ul className="hdr-icons-375 center">
        <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="SMI-375" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="SMI-375" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="SMI-375" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className="SMI-375" /></a></li>
      </ul>
    </header>
  )
}
