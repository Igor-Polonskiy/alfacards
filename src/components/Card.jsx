import { useDispatch } from 'react-redux';
import {toggleLike, deleteCard} from '../store/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import { useRef } from 'react';



const Card = ({ id, url, liked }) => {
//const heart = useRef()
  const dispatch = useDispatch();
  //function handleClick(){
 //   heart.current.classList.toggle('liked');
 // }

  const unlikedCard = <FontAwesomeIcon icon={faHeart} className="icon unliked" />
  const likedCard = <FontAwesomeIcon icon={faHeart} className="icon liked" />


  return (
    <div className='card' style = {{backgroundImage: `url(${url})`}}>
      
      <div className='heart' onClick={()=>dispatch(toggleLike({id}))}>{liked?likedCard:unlikedCard}</div>
      
      <div>id:{id}</div>
      <div className='delete' onClick={()=> dispatch(deleteCard({id}))}>удалить</div>

    </div>
  );
};

export default Card;
