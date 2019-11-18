  
import React from 'react'
import './ItemForm.css'

export default function ItemForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Item-form', className].join(' ')}
      action='#'
      {...otherProps}
    />

    
  )
}