import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import { countItemsForCategory } from '../item-helpers'
// import './NoteListNav.css'

export default function ItemListNav(props) {
  return (
    <div className='ItemListNav'>
      <ul className='ItemListNav__list'>
        {props.categories.map(category =>
          <li key={category.id}>
            <NavLink
              className='ItemListNav__category-link'
              to={`/category/${category.id}`}
            >
              <span className='ItemListNav__num-notes'>
                {countItemsForCategory(props.items, category.id)}
              </span>
              {category.name}
            </NavLink>
          </li>
        )}
      </ul>
      <div className='ItemListNav__button-wrapper'>
        <CircleButton
          tag={Link}
          to='/add-category'
          type='button'
          className='ItemListNav__add-category-button'
        >
          {/* <FontAwesomeIcon icon='plus' /> */}
          <br />
          Category 
        </CircleButton>
      </div>
    </div>
  )
}

ItemListNav.defaultProps = {
  categories: []
}