import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Item.css'

export default function Item(props) {
  return (
    <div className='Item'>
      <h2 className='Item__title'>
        <Link to={`/Item/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <button className='Item__delete' type='button'>
        {/* <FontAwesomeIcon icon='trash-alt' /> */}
        {' '}
        remove
      </button>
      <div className='Item__dates'>
        <div className='Item__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}