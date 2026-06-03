import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import { useNavigate } from 'react-router-dom';

import DynamicHeader from '../Header/DUI';
import Navbar from '../Navigation/Navbar';
import Search from '../Search/Search';

export default function AlphaCardsPage({
  groups,
  classNames = {}
}) {
  const navigate = useNavigate();

  const {
    container = 'cards-container',
    card = 'card',
    content = 'card-content',
    letters = 'letters',
    lettersButton = 'lettersB',
    text = 'card-text',
    range = 'range',
    goButton = 'GoB'
  } = classNames;

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
      <Search />

      <div className={container}>
        {groups.map((group) => (
          <Card
            key={group.label}
            variant="soft"
            className={card}
          >
            <CardContent className={content}>

              <ButtonGroup className={letters}>
                {group.letters.map((letter) => (
                  <Button
                    key={letter}
                    size="sm"
                    variant="outlined"
                    className={lettersButton}
                    onClick={() =>
                      handleLetterClick(group.label, letter)
                    }
                  >
                    {letter}
                  </Button>
                ))}
              </ButtonGroup>

              <div className={text}>
                {group.text.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}

                <p className={range}>{group.label}</p>
              </div>

              <Button
                className={goButton}
                onClick={() => handleGo(group.label)}
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