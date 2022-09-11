import React from 'react';
import ListCheckbox from './ListCheckbox';
import '../Styles/CharPage.scss';
import LabelText from './LabelText';

function CharacterStats() {
  return (
    <section className='charStats'>
      <section className='charAttributes'>
        <div className='charAttr'>
          <LabelText name='Strength' />

          <LabelText name='Dexterity' />

          <LabelText name='Constitution' />

          <LabelText name='Wisdom' />

          <LabelText name='Intelligence' />

          <LabelText name='Charisma' />
        </div>

        <div className='charStSk'>
          <div className='charBonus'>
          <LabelText name='Inspiration' />
          <LabelText name='Proficiency Bonus' />
          </div>
        
        <div>
          <div className='savingThrows'>
          <label> Saving Throws </label>
          <ul>
            <ListCheckbox name='Strength'/>
            <ListCheckbox name='Dexterity'/>
            <ListCheckbox name='Constitution'/>
            <ListCheckbox name='Wisdom'/>
            <ListCheckbox name='Intelligence'/>
            <ListCheckbox name='Charisma'/>
            </ul>
            </div>
          
          <div className='skills'>
          <label> Skills </label>
          <ul>
            <ListCheckbox name='Acrobatics'/>
            <ListCheckbox name='Animal Handling'/>
            <ListCheckbox name='Arcana'/>
            <ListCheckbox name='Athletics'/>
            <ListCheckbox name='Deception'/>
            <ListCheckbox name='History'/>
            <ListCheckbox name='Insight'/>
            <ListCheckbox name='Intimidation'/>
            <ListCheckbox name='Investigation'/>
            <ListCheckbox name='Medicine'/>
            <ListCheckbox name='Nature'/>
            <ListCheckbox name='Perception'/>
            <ListCheckbox name='Performance'/>
            <ListCheckbox name='Persuasion'/>
            <ListCheckbox name='Religion'/>
            <ListCheckbox name='Sleight of Hand'/>
            <ListCheckbox name='Stealth'/>
            <ListCheckbox name='Survival'/>
            </ul>
            </div>
            </div>
        </div>
      </section>

      <section>
        <div className='charPas'>
          
          <textarea className='charPassive' />
          <a> Passive Wisdom (Perception) </a>
        </div>

        <div className='charLang'>
          <label> Other Proficiencies and Languages </label>
          <br/>
          <textarea className='charLangInfo' />
        </div>
      </section>

    </section>
  )
}

export default CharacterStats