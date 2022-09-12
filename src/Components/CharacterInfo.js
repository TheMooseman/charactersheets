import React from 'react'
import LabelText from './LabelText'

function CharacterInfo() {
  return (
    <div className='charInfo'>
      <div className='charNameDiv'>
        <label> Name </label>
        <textarea className='charName' />
      </div>

        <div className='charData'> 
          <div className='data1'>
            <LabelText name='Class/Level'/>

            <LabelText name='Background'/>

            <LabelText name='Player Name'/>
          </div>

          <div className='data2'>
          <LabelText name='Race'/>

          <LabelText name='Alignment' />

          <LabelText name='Experience'/>
          </div>

        </div>
    </div>
  )
}

export default CharacterInfo