import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import './dcss.css'

export default function Header2560() {
  return (
    <header className="hdr-2560 center">
      <div className="w-80"></div>

      <ul className="hdr-icons-2560 center w-20">
        <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className=" SMI-2560" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="SMI-2560" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="SMI-2560" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareTwitter} className=" SMI-2560" /></a></li>
      </ul>
    </header>
  )
}
