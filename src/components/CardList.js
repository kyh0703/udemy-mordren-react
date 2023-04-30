import React from 'react';
import './CardList.css';
import Card from './Card';

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => (
        <Card id={monster.id} name={monster.name} email={monster.email} />
      ))}
    </div>
  );
};

export default CardList;
