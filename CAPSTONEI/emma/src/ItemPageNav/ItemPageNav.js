import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './ItemPageNav.css'

export default function ItemPageNav(props) {
  return (
    <div className='ItemPageNav'>
      <CircleButton
        tag='button'
        role='link'
        onClick={() => props.history.goBack()}
        className='ItemPageNav__back-button'
      >
        {/* <FontAwesomeIcon icon='chevron-left' /> */}
        <br />
        Back
      </CircleButton>
      {props.category && (
        <h3 className='ItemPageNav__category-name'>
          {props.category.name}
        </h3>
      )}
    </div>
  )
}

ItemPageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}