import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Input from '@mui/joy/Input';
import './talk-form.css';

export default function TalkForm({ onClose }) {
  return (
    <div id="talkPanel" className="talk-panel show">
      <div className="talk-panel-inner">
        <div className="talk-panel-header">
          <h4 className="talk-panel-title fs-20 pls-600" >Talk to Us</h4>
          <button type="button" className="talk-panel-close" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <form className="talk-form">
          <div className='center g-8'>
            <input
              type="text"
              className="talk-input pls"
              placeholder="Your Name"
              required
            />
            <Input
              className="talk-input pls"
              variant="plain"
              startDecorator={<span className="talk-code">+91</span>}
              placeholder="Your Phone Number"
              type="tel"
              required
              sx={{ width: '100%' }}
            />
          </div>
          <input
            type="email"
            className="talk-input pls"
            placeholder="Your Email"
            required
          />
          <textarea
            className="talk-textarea pls"
            rows={4}
            placeholder="Your Message"
            required
          />
          <div className='center talk-submit-d'>
            <button type="submit" className="talk-submit-b pls-600">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
