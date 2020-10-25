import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListView from './ListView';
import styles from './MainContainer.module.css';

export const MainContainer = () => {

  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('characters.json');
      setCharacters(response.data);
      
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div className={styles.wrapper}>
      <ListView characters={characters} />
    </div>
  )
}

export default MainContainer;