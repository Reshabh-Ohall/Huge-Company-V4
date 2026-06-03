import Cards from '../../components/Card/Cards';
import downloadGroups from './data';

import './Download.css';

export default function Download() {
  return (
    <Cards
      groups={downloadGroups}
    />
  );
}