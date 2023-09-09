import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './components/Cards/Cards';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, serCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://api.thedogapi.com/v1/breeds');
      setCards(res.json());
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Cards cards={cards} loading={loading} />
    </div>
  );
}

export default App;
