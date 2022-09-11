import React from 'react';
import '../Styles/CharPage.scss';

function ListCheckbox(props) {
  return (
    <div className='listCheckbox'>
      <input type='checkbox'/>
      <input type='text' className='listText' />
      <label>{props.name}</label>
    </div>
  )
}

export default ListCheckbox