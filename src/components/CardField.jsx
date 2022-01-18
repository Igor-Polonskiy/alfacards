import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCards } from "../store/todoSlice";
import Card from "./Card";
import "../App.css";
import { Fragment } from "react";

const CardField = () => {
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.cards.cards);
  const [filterCards, setFilterCards] = useState([]);
  const [filter, setFilter] = useState(false);
  const [renderCards, setRenderCards] = useState(cards);

  const handleClick = () => {
    setFilter((filter) => (filter = !filter));
  };

  useEffect(()=>{
    dispatch(fetchCards())
  }, [dispatch])

  useEffect(()=>{
    if (filter) {
      setRenderCards(filterCards);
    } else setRenderCards(cards);
  },[filter, cards, filterCards])
  
  useEffect(() => {
    let fcards = cards.filter((card) => card.liked === true);
    setFilterCards(fcards);
  }, [filter, cards]);

  return (
    <Fragment>
      <button onClick={handleClick}>показать{filter? 'все': 'любимые'}</button>
      <div className="cardfield">
        {renderCards.map((item) => <Card key={item.id} {...item} />)}
      </div>
    </Fragment>
  );
};

export default CardField;
