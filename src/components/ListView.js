import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ImageView from './ImageView';
import styles from './ListView.module.css';

export const ListView = ({ characters }) => {

  const renderImages = characters.map((character) =>
    <Link to={`/${character.id}`} key={character.id}><ImageView character={character} /></Link>
  )

  return (
    <Fragment>
      <div className={styles.main}>
        {renderImages}
      </div>
      <p>Please click an image for an individual view</p>
    </Fragment>
  )
}

export default ListView;