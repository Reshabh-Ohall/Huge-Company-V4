import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';
import { useState, useEffect } from 'react';
import TalkForm from '../Talk to Us/talk-form.jsx';
import { useNavigate } from "react-router-dom";


export default function Search() {
  const navigate = useNavigate();
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 425);
  const [isTalkOpen, setIsTalkOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 425);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Contact row */}
      <div className='center contact-pc'>
        <div className='fl w-60 pa2'></div>
        <div className='fl w-40 pa2'>
          <ul className='contact-ul tc'>
            <li className='tc email'>
              <a className='pls contact' href='mailto:namastehuge@gmail.com'>
                namastehuge@gmail.com
              </a>
            </li>
            <li className='tc cell-phone'>
              <a className='pls contact' href='tel:+918280031001'>
                +91 828 003 1001
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Search row */}
      <div className='fl w-100 pa2 search-wrapper'>
        <div className='search-box flex items-center'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input
            type='text'
            className='search-input pls'
            placeholder={
              isSmall
                ? 'Search'
                : 'Search information to get the right document clarity'
            }
          />
          <button 
            className='sButton pls' 
            onClick={() => setIsTalkOpen(true)}
          >
            Talk to Us
          </button>
          <button
            className='sButton pls'
            onClick={() => navigate("/download")}
          >
            Download
          </button>
        </div>
      </div>

      {isTalkOpen && (
        <div className='talk-overlay show' onClick={() => setIsTalkOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <TalkForm onClose={() => setIsTalkOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
