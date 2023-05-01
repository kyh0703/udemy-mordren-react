import './App.css';
import CardList from './components/CardList';

import React, { useCallback, useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState('');

  console.log('render');
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();
      setMonsters(users);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
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
