import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './ImageDisplayView.module.css';

export const ImageDisplayView = (props) => {

  const [character, setCharacter] = useState({});

  console.log("PROPS: ", props)

  useEffect(() => {
    fetchCharacter()
  }, [])

  const fetchCharacter = async () => {
    const id = props.match.url.slice(1);
    try {
      const response = await axios.get('characters.json');
      setCharacter(response.data.find(el => el.id === id));
      
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className={styles.wrapper}>
      <img src={character.image} alt={character.name} className={'animate__animated animate__zoomIn'} />
      <div className={`${styles.name} animate__animated animate__rotateIn`}>{character.name}</div>
      <Link to={'/'}><button className={styles.button}>Back to all characters</button></Link>
    </div>
  )
}

export default ImageDisplayView;