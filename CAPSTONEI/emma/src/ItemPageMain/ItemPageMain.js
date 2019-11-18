  
import React from 'react'
import Item from '../Item/Item'
// import './ItemPageMain.css'

export default function ItemPageMain(props) {
  return (
    <section className='ItemPageMain'>
      <Item
        id={props.item.id}
        name={props.item.name}
        modified={props.item.modified}
      />
      <div className='ItemPageMain__content'>
        {props.item.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}

ItemPageMain.defaultProps = {
  note: {
    content: '',
  }
}