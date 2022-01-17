import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../store/todoSlice';
import './card.css'

const Card = ({ id, title, url, liked }) => {
  //const dispatch = useDispatch();

  return (
    <div className='card' style = {{backgroundImage: `url(${url})`}}>
      <input
        type='checkbox'
        checked={liked}
        //onChange={() => dispatch(toggleComplete({ id }))}
      />
      <div className='heart'></div>
      
      <span>{title}</span>

    </div>
  );
};

export default Card;
