import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";
import { Fragment } from "react";

const CardField = () => {
  const cards = useSelector((state) => state.cards.cards);
  const [filterCards, setFilterCards] = useState(cards)
  const [filter, setFilter] = useState(false)
  const handleClick=()=>{
    setFilter(filter=>filter=!filter)
  }
  useEffect(() => {
    let fcards = cards.filter(card=>card.liked === true)
 setFilterCards(fcards)
 console.log(fcards)
  }, [filter])

  return (
    <Fragment>
      <button onClick={handleClick}>фильтр</button>
      <div className="cardfield">
      {filter?
      filterCards.map((item) => <Card key={item.id} {...item} />)
        :
      cards.map((item) => <Card key={item.id} {...item} />)
        }
      </div>
    </Fragment>
  );
};

export default CardField;
