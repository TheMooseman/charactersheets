import React, { useEffect } from 'react'
import { useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../Firebase-Config';
import CharacterInfo from '../Components/CharacterInfo';
import CharacterStats from '../Components/CharacterStats';
import CharacterCombatInfo from '../Components/CharacterCombatInfo';
import CharacterPersonality from '../Components/CharacterPersonality';
import '../Styles/CharPage.scss';

function CharacterPage() {

    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const testColRef = collection(db, 'test');

    useEffect(() => {
        // const getInfo = async () => {
        // const userInfo = await getDocs(testColRef);
        
        // setData(userInfo.docs[0].data());
        // console.log(data);
        // }

        
    });

    async function createCharacter() {
        await addDoc(testColRef, {
            title,
            description,
            author: {id: auth.currentUser.uid, name: auth.currentUser.displayName}
        });
        console.log('test')
    }
    

  return (
    <div className='charPage'>
            <CharacterInfo />
            <CharacterStats />
            <CharacterCombatInfo  />
            <CharacterPersonality />
    </div>
  )
}

export default CharacterPage