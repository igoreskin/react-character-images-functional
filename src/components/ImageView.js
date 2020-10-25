import React from 'react';
import styles from './ImageView.module.css';

export const ImageView = ({ character}) => {
  return (
    <div className={styles.image}>
      <img src={character.image} alt={character.name} />
    </div>
  )
}

export default ImageView;