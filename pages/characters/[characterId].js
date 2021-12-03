import React from 'react';
import { useRouter } from 'next/router';

const CharacterItem = () => {
  const {query: {characterId}} = useRouter();
  return (
    <div>
      Pages of Test of Character: {characterId}
    </div>
  )
}

export default CharacterItem;
