import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import DynamicHeader from '../Header/DUI';
import Navbar from '../Navigation/Navbar';
import Search from '../Search/Search';
import { useNavigate } from 'react-router-dom';
import './Download.css';

export default function Download() {
  const navigate = useNavigate();

  const groups = [
    { label: 'A-F', letters: ['A','B','C','D','E','F'] },
    { label: 'G-M', letters: ['G','H','I','J','K','L','M'] },
    { label: 'N-T', letters: ['N','O','P','Q','R','S','T'] },
    { label: 'U-Z', letters: ['U','V','W','X','Y','Z'] }
  ];

  const handleLetterClick = (group, letter) => {
    navigate(`/${group.toLowerCase()}/${letter.toLowerCase()}`);
  };

  const handleGo = (group) => {
    navigate(`/${group.toLowerCase()}`);
  };

  return (
    <>
      <DynamicHeader />
      <Navbar />

      <div className="cards-container">
        {groups.map((group) => (
          <Card key={group.label} variant="soft" className="card">
            <CardContent className="card-content">
              
              {/* Top: Letters */}
              <ButtonGroup className="letters">
                {group.letters.map((letter) => (
                  <Button
                    key={letter}
                    size="sm"
                    variant="outlined"
                    onClick={() => handleLetterClick(group.label, letter)}
                    className="lettersB"
                  >
                    {letter}
                  </Button>
                ))}
              </ButtonGroup>

              {/* Middle: Text */}
              <div className="card-text">
                <p>Checklist, Checknote, Checkorder</p>
                <p>and Checkreports in Departments</p>
                <p className="range">{group.label}</p>
              </div>

              {/* Bottom: Go */}
              <Button className='GoB' onClick={() => handleGo(group.label)}>
                Go
              </Button>

            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}