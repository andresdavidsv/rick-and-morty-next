import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { BeakerIcon, CameraIcon, FingerPrintIcon, FlagIcon, MapIcon } from '@heroicons/react/solid';

import { useQuery } from '@apollo/client';
import Loading from '@components/LoadingComponent/Loading';

// Services
import { GET_CHARACTER } from '../../services/index';

const CharacterItem = () => {
  const { query: { characterId } } = useRouter();
  const { data, loading, error } = useQuery(GET_CHARACTER, { variables: { id: characterId } });
  let episodeRandomId;
  let randomNumber;

  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return null;
  }

  if (data) {
    randomNumber = Math.floor(Math.random() * data.character.episode.length);
    episodeRandomId = data.character.episode[randomNumber].id;
  }

  return (
    <div className="container mx-auto my-auto mr-6">
      <div className="px-4 py-16 mx-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {data.character.name}
              <br className="inline-block" />
              <span className="inline-block text-gray-400">
                {data.character.species}
              </span>
            </h2>
            <span className={`inline-block ${data.character.status === 'Alive' ? 'bg-green-200 text-gray-700' : 'bg-red-500 text-white'} rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}>
              {data.character.status}
            </span>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="flex flex-row">
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-2 rounded-full bg-indigo-50">
                <FingerPrintIcon className="h-5 w-5 text-blue-500"/>
              </div>
                <h6 className="my-3 font-semibold  leading-5 truncate">
                  {data.character.gender}
                </h6>
            </div>
            <div className="flex flex-row">
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-2 rounded-full bg-indigo-50">
                  <FlagIcon className="h-5 w-5 text-blue-500" />
              </div>
              <h6 className="my-3 font-semibold leading-5 truncate">
                {data.character.origin.name}
              </h6>
            </div>
            <div className="flex flex-row">
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-2 rounded-full bg-indigo-50">
                  <BeakerIcon className="h-5 w-5 text-blue-500" />
              </div>
              <h6 className="my-3 font-semibold leading-5 truncate">
                {data.character.origin.dimension ? data.character.origin.dimension : 'No Found Dimension' }
              </h6>
            </div>
            <div className="flex flex-row">
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-2 rounded-full bg-indigo-50">
                  <MapIcon className="h-5 w-5 text-blue-500" />
              </div>
              <h6 className="my-3 font-semibold leading-5 truncate">
                {data.character.location.name}
              </h6>
            </div>
            <div className="flex flex-row">
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-2 rounded-full bg-indigo-50">
                  <CameraIcon className="h-5 w-5 text-blue-500" />
                </div>
              <Link href="/episodes/[episodeRandomId]" as={`/episodes/${episodeRandomId}`} passHref>
              <h6 className="my-3 font-semibold leading-5 truncate cursor-pointer">
                    {data.character.episode[randomNumber].name}
              </h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid justify-center">
            <Image
              src={data.character.image}
              alt={data.character.name}
              width={400}
              height={400}
            />
        </div>
      </div>
    </div>
    </div>
  )
}

export default CharacterItem;
