import React, { useCallback, useEffect, useState, ChangeEvent } from 'react';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

import { getData } from './utils/data.utils';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log('render');
  useEffect(() => {
    // async function fetchUsers() {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/users'
    //   );
    //   const users = await response.json();
    //   setMonsters(users);
    // }
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        className={'card-list'}
        onChangeHandler={onSearchChange}
        placeholder={'search monstaer'}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
