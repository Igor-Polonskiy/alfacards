import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../card/Card';
//import { setLike } from './cardfieldSlice'

export function Cardfield(){
    const cards = useSelector(state => state.cards);
   

    return(
        <div className='cardfield'>
            {cards.map(card=><Card key={card.id} {...cards}/>)}
        </div>
    )
}