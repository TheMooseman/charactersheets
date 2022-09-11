import React from 'react';
import '../Styles/CharPage.scss';

function CharacterCombatInfo() {
  return (
    <div className='charComInfo'>
        <div>
            <label> Armor Class </label>
            <textarea className='charAC' />

            <label> Initiative </label>
            <textarea className='charInit' />

            <label> Speed </label>
            <textarea className='charSpeed' />
        </div>

        <div className='charHP'>
            <label> Current HP </label>
            <textarea className='charHP' />

            <label> Temporary HP </label>
            <textarea className='charTempHP' />
        </div>

        <div className='charHitDice'>
            <label> Hit Dice </label>
            <textarea className='charHit' />

            <label> Death Saves </label>
            <div>
                Successes
                <ol>
                    <input type='checkbox'/>
                    <input type='checkbox'/>
                    <input type='checkbox'/>
                </ol>

                Failures
                <ol>
                    <input type='checkbox'/>
                    <input type='checkbox'/>
                    <input type='checkbox'/>
                </ol>
            </div>
        </div>

        <div className='charAttacks'>
            <label> Attacks & Spellcasting </label>
            <textarea className='charAttacks' />
        </div>

        <div className='charEquip'>
            <label> Equipment </label>
            <textarea />
        </div>

    </div>
  )
}

export default CharacterCombatInfo