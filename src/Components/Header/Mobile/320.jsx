import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import './mcss.css'

export default function Header320() {
  return (
    <header className="hdr-320 center">
      <ul className="hdr-icons-320 center">
        <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="SMI-320" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="SMI-320" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="SMI-320" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className="SMI-320" /></a></li>
      </ul>
    </header>
  )
}
