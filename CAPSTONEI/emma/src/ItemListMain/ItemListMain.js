import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Item from '../Item/Item'
import CircleButton from '../CircleButton/CircleButton'
import './ItemListMain.css'

export default function ItemListMain(props) {
    return (
      <section className='ItemListMain'>
        <ul>
          {props.Items.map(Item =>
            <li key={Item.id}>
              <Item
                id={Item.id}
                name={Item.name}
                modified={Item.modified}
              />
            </li>
          )}
        </ul>
        <div className='ItemListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-Item'
            type='button'
            className='ItemListMain__add-Item-button'
          >
            {/* <FontAwesomeIcon icon='plus' /> */}
            <br />
            Item
          </CircleButton>
        </div>
      </section>
    )
  }
  
  ItemListMain.defaultProps = {
    Items: [],
  }