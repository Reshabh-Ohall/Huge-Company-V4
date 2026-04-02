import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import DynamicHeader from '../Header/DUI';
import Navbar from '../Navigation/Navbar';
import Search from '../Search/Search';
import './Download.css';
import { useNavigate } from 'react-router-dom';

export default function Download() {
  const navigate = useNavigate();

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // split into 4 cards max
  const chunkSize = Math.ceil(letters.length / 4);
  const chunks = [];

  for (let i = 0; i < letters.length; i += chunkSize) {
    chunks.push(letters.slice(i, i + chunkSize));
  }

  const handleLetterClick = (letter) => {
    navigate(`/a-f/${letter.toLowerCase()}`);
  };

  return (
    <>
      <div>
        <DynamicHeader />
        <Navbar />
        <Search />
      </div>

      <div className="CardsP g-20">
        {chunks.map((group, index) => (
          <Card key={index} variant="soft" className="Card">
            <CardContent>
              <p className="fs-18 tc">Departments</p>

              <p className="fs-20 tc">
                {group[0]} - {group[group.length - 1]}
              </p>

              <ButtonGroup sx={{ mt: 1, flexWrap: 'wrap' }}>
                {group.map((letter) => (
                  <Button
                    key={letter}
                    variant="outlined"
                    onClick={() => handleLetterClick(letter)}
                  >
                    {letter}
                  </Button>
                ))}
              </ButtonGroup>

              <Button
                sx={{ mt: 1 }}
                onClick={() => navigate('/a-f')}
              >
                Go
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}