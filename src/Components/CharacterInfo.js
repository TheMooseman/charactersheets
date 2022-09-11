import React from 'react'

function CharacterInfo() {
  return (
    <div className='charInfo'>
        <label> Name </label>
        <textarea className='charName' />
        <div className='charData'> 
            <label> Class/Level </label>
            <textarea className='charInfo' />

            <label> Background </label>
            <textarea className='charInfo'/>

            <label> Race </label>
            <textarea className='charInfo' />

            <label> Alignment </label>
            <textarea className='charInfo' />

            <label> Experience </label>
            <textarea className='charInfo' />
        </div>
    </div>
  )
}

export default CharacterInfo