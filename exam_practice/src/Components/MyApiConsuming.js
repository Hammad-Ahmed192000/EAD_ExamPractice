

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.example.com/data'; // Replace with your API endpoint

const MyApiConsuming = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchedWords, setSearchedWords] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filterData = () => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredData;
  };

  const handleSearch = () => {
    setSearchedWords([...searchedWords, filter]);
    setFilter('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filter"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {filterData().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <p>Searched words:</p>
        <ul>
          {searchedWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyApiConsuming;




