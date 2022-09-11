import React from 'react'
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../Firebase-Config';

function CharacterPage() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const testColRef = collection(db, 'test');

    async function createCharacter() {
        await addDoc(testColRef, {
            title,
            description,
            author: {id: auth.currentUser.uid, name: auth.currentUser.displayName}
        });
        console.log('test')
    }

  return (
    <div>
        
        CharacterPage
        <div className='character'>
            <label>Title:</label>
            <input type='text' placeholder='Title' 
            onChange={(e) => setTitle(e.target.value)}/>
            <br/>
            <label>Info:</label>
            <textarea placeholder='Info' 
            onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <button onClick={createCharacter}>Submit</button>
            <h1></h1>
        </div>
    </div>
  )
}

export default CharacterPage