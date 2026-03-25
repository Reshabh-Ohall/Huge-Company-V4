import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import './mcss.css'

export default function Header425() {
  return (
    <header className="hdr-425 center">
      <ul className="hdr-icons-425 center">
        <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="SMI-425" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="SMI-425" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="SMI-425" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className="SMI-425" /></a></li>
      </ul>
    </header>
  )
}
