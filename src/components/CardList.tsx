import React from 'react';
import { Monster } from '../App';
import './CardList.css';
import Card from './Card';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;
