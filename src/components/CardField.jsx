import { useSelector } from 'react-redux';
import Card from './Card';
import './card.css'

const CardField = () => {
    const cards = useSelector(state => state.cards.cards);

  return (
    <div className='cardfield'>
      {cards.map((item) => (
        <Card
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default CardField;